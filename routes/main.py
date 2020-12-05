import os

import requests
from flask import Blueprint, render_template, redirect, request, json, session

main = Blueprint('main', __name__, template_folder='templates')


@main.route('/')
def login():
    returnRedirect = confirmCredentials(1)
    if returnRedirect != "":
        return redirect(returnRedirect)
    return render_template('login.html')


@main.route('/', methods=['POST'])
def auth():
    returnRedirect = confirmCredentials(1)
    if returnRedirect != "":
        return redirect(returnRedirect)

    dataPost = {"username": request.form.get("dadoAcesso"),
                "password": request.form.get("password")}
    url = "http://127.0.0.1:5000//login?"
    headers = {
        'Content-Type': 'application/json'
    }
    payload = json.dumps(dataPost).replace('"', '\"');
    r = requests.request("POST", url, headers=headers, data=payload)

    if r.status_code == 200:
        response = r.json()
        session['access_token'] = response['access_token']
        session['refresh_token'] = response['refresh_token']
        session['access'] = "1";
        return redirect("/horarios")
    elif r.status_code == 401:
        return render_template("/login.html", data="Dados incorretos.")
    else:
        return render_template("/login.html", data="Tente novamente.")


@main.route('/recuperar')
def recuperar():
    returnRedirect = confirmCredentials(1)
    if returnRedirect != "":
        return redirect(returnRedirect)

    return render_template('recuperar.html')


@main.route('/recuperar', methods=['POST'])
def recuperarSendEmail():
    returnRedirect = confirmCredentials(1)
    if returnRedirect != "":
        return redirect(returnRedirect)

    return render_template('login.html', data="Email enviado")


@main.route('/horarios')
def horariotab():
    returnRedirect = confirmCredentials(0)
    if returnRedirect != "":
        return redirect(returnRedirect)

    session['page'] = "horarios"
    return render_template('index.html')


@main.route('/mapa')
def maptab():
    session['page'] = "mapa"
    return render_template('index.html')


@main.route('/calendario')
def calendarTab():
    session['page'] = "calendario"
    return render_template('index.html')


@main.route('/definicoes')
def definicoesTab():
    session['page'] = "definicoes"
    return render_template('index.html')


@main.route('/logout')
def logout():
    if len(session.keys()) != 0:
        session.clear()
    return redirect("/")


def confirmCredentials(notAutenticated=0):
    # Encontra-se autenticado, validar se tem token associados para a pagina
    if notAutenticated == 0:
        if len(session.keys()) == 0:
            return "/"
        elif session.get('page') == "":
            return "/horarios"
    # Não se encontra autenticado == 1, validar se está numa zona não autenticada
    elif len(session.keys()) != 0 and session.get('access_token') != "" and session.get('refresh_token') != "":
        return "/horarios"
    return "";
