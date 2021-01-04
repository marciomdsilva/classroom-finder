import locale
import os
from datetime import date, datetime, timedelta

import requests
from flask import Blueprint, render_template, redirect, request, json, session

main = Blueprint('main', __name__, template_folder='templates')

locale.setlocale(locale.LC_TIME, 'pt_PT.UTF-8')

@main.route('/')
def login():
    returnRedirect = confirmCredentials(0, 0)
    if returnRedirect != "":
        return redirect(returnRedirect)

    return render_template('login.html')


@main.route('/', methods=['POST'])
def auth():
    returnRedirect = confirmCredentials(0, 0)
    if returnRedirect != "":
        return redirect(returnRedirect)

    dataPost = {"username": request.form.get("dadoAcesso"),
                "password": request.form.get("password")}
    url = "http://127.0.0.1:5000//login?"
    headers = {
        'Content-Type': 'application/json'
    }
    payload = json.dumps(dataPost).replace('"', '\"')
    r = requests.request("POST", url, headers=headers, data=payload)

    if r.status_code == 200:
        response = r.json()
        session['access_token'] = response['access_token']
        session['refresh_token'] = response['refresh_token']
        session['access'] = response['access']
        session['userId'] = response['userId']
        return redirect("/horarios")
    elif r.status_code == 401:
        return render_template("/login.html", data="Dados incorretos.")
    else:
        return render_template("/login.html", data="Tente novamente.")


@main.route('/recuperar')
def recuperar():
    returnRedirect = confirmCredentials(0, 0)
    if returnRedirect != "":
        return redirect(returnRedirect)

    return render_template('recuperar.html')


@main.route('/recuperar', methods=['POST'])
def recuperarSendEmail():
    returnRedirect = confirmCredentials(0, 0)
    if returnRedirect != "":
        return redirect(returnRedirect)

    return render_template('login.html', data="Email enviado")


@main.route('/horarios', methods=['GET'])
def horariotab():
    returnRedirect = confirmCredentials(1, 0)
    if returnRedirect != "":
        return redirect(returnRedirect)

    if "data" in request.args:
        try:
            today = datetime.strptime(request.args.get("data"), "%d%m%Y")
        except Exception:
            today = datetime.date(datetime.now())
    else:
        today = datetime.date(datetime.now())

    if today.strftime("%w") == '0' or today.strftime("%w") == '6':
       dataInicio = today + timedelta(days=-today.weekday(), weeks=1)
    elif today.strftime("%w") != '1':
       dataInicio = today - timedelta(days=today.weekday())
    else:
       dataInicio = today


    weekDays = {}

    weekDays[0] = {}
    weekDays[0]["data"] = dataInicio.strftime("%d/%m/%Y")
    weekDays[0]["diaSemana"] = dataInicio.strftime("%A").split("-")[0].capitalize()
    modified_date = dataInicio
    for i in range(6):
        modified_date = modified_date + timedelta(days=1)
        weekDays[i+1] = {}
        weekDays[i+1]["data"] = modified_date.strftime("%d/%m/%Y")
        weekDays[i+1]["diaSemana"] = modified_date.strftime("%A").split("-")[0].capitalize()

    data = {}
    data["datas"] = weekDays

    modified_date = modified_date + timedelta(days=1)
    data["nextWeek"] = modified_date.strftime("%d%m%Y")
    data["prevWeek"] = (modified_date - timedelta(days=14)).strftime("%d%m%Y")


    url = "http://127.0.0.1:5000//horarios_"
    payload = {
        "datainicio": weekDays[0]["data"],
        "datafim": weekDays[6]["data"],
        "userId": session['userId']
    }

    headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + session['access_token'],
    }
    r = requests.request("GET", url, headers=headers, data=json.dumps(payload))
    if r.status_code == 200:
        data["horarios"] = r.json()
    session['page'] = "horarios"
    return render_template('index.html', data=data)

@main.route('/mapa')
def maptab():
    returnRedirect = confirmCredentials(1, 0)
    if returnRedirect != "":
        return redirect(returnRedirect)

    session['page'] = "mapa"
    return render_template('index.html')


@main.route('/logout')
def logout():
    returnRedirect = confirmCredentials(1, 0)
    if returnRedirect != "":
        return redirect(returnRedirect)

    url = "http://127.0.0.1:5000//logout"
    headers = {
        'Authorization': 'Bearer ' + session['access_token'],
    }
    r = requests.request("POST", url, headers=headers, data={})

    if r.status_code == 200 or r.status_code == 401:
        if len(session.keys()) != 0:
            session.clear()
        return redirect("/")
    return redirect("/" + session['page'])


def confirmCredentials(autenticated=0, adminArea=0):
    # Encontra-se autenticado, validar se tem token associados para a pagina
    if autenticated == 1:
        if len(session.keys()) == 0:
            return "/"
        elif session.get('page') == "":
            return "/horarios"

    # Não se encontra autenticado == 1, validar se está numa zona não autenticada
    elif len(session.keys()) != 0 and session.get('access_token') != "" and session.get('refresh_token') != "":
        return "/horarios"
    if adminArea == 1 and session.get('access') != 2:
        return "/horarios"
    return ""
