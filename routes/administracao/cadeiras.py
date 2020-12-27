import requests
from flask import Blueprint, render_template, redirect, request, json, session
from routes.main import confirmCredentials

admCadeiras = Blueprint('admCadeiras', __name__, template_folder='templates')


@admCadeiras.route('/admCadeiras', methods=['POST', 'GET'])
def admCadeirasTab():
    returnRedirect = confirmCredentials(1, 1)
    if returnRedirect != "":
        return redirect(returnRedirect)
    data = {}

    url = "http://127.0.0.1:5000//cursos_"
    headers = {
        'Authorization': 'Bearer ' + session['access_token'],
    }
    r = requests.request("GET", url, headers=headers, data={})


    url = "http://127.0.0.1:5000//cadeiras_"
    if request.method == 'POST':
        url = "http://127.0.0.1:5000//cadeiras_?search=" + request.form.get("search")+"&curso=" + request.form.get("curso")
        data["search"] = request.form.get("search")
        data["curso"] = request.form.get("curso")

    headers = {
        'Authorization': 'Bearer ' + session['access_token'],
    }
    r1 = requests.request("GET", url, headers=headers, data={})

    if r.status_code == 200 and r1.status_code == 200:
        data["cursos"] = r.json()["cursos"]
        data["cadeiras"] = r1.json()["cadeiras"]
        session['page'] = "admCadeiras"
        return render_template('administracao/cadeiras/listagem.html', data=data)
    else:
        return redirect("/")


@admCadeiras.route('/admCadeiras/<cadeiraID>', methods=['GET'])
def admCadeirasView(cadeiraID):
    returnRedirect = confirmCredentials(1, 1)
    if returnRedirect != "":
        return redirect(returnRedirect)
    data = {}

    url = "http://127.0.0.1:5000//cadeiras_/" + cadeiraID

    headers = {
        'Authorization': 'Bearer ' + session['access_token'],
    }
    r = requests.request("GET", url, headers=headers, data={})

    url = "http://127.0.0.1:5000//salas_"
    headers = {
        'Authorization': 'Bearer ' + session['access_token'],
    }
    r1 = requests.request("GET", url, headers=headers, data={})

    url = "http://127.0.0.1:5000//horarios_/" + cadeiraID
    headers = {
        'Authorization': 'Bearer ' + session['access_token'],
    }
    r2 = requests.request("GET", url, headers=headers, data={})

    if r.status_code == 200 and r1.status_code == 200 and r2.status_code == 200:
        data["cadeira"] = r.json()
        data["salas"] = r1.json()["salas"]
        data["horarios"] = r2.json()
        return render_template('administracao/cadeiras/horarioCadeira.html', data=data)
    else:
        return redirect("/")


@admCadeiras.route('/admCadeiras/<cadeiraID>', methods=['POST'])
def admCadeirasViewCreate(cadeiraID):
    returnRedirect = confirmCredentials(1, 1)
    if returnRedirect != "":
        return redirect(returnRedirect)

    url = "http://127.0.0.1:5000//horarios_"
    data = {}

    data["cadeira_id"] = cadeiraID
    data["sala_id"] = request.form.get("salaForm")
    data["horainicio"] = request.form.get("horaInicio")
    data["horafim"] = request.form.get("horaFim")
    data["diaSemana"] = request.form.get("diaSemForm")
    data["datainicio"] = request.form.get("dataInicio")
    data["datafim"] = request.form.get("dataFim")

    payload = json.dumps(data)
    headers = {
        'Authorization': 'Bearer ' + session['access_token'],
        'Content-Type': 'application/json'
    }
    r = requests.request("POST", url, headers=headers, data=payload)


    return redirect("/admCadeiras/" + cadeiraID)


@admCadeiras.route('/admCadeiras/<cadeiraID>/delete/<horarioId>')
def admCadeirasDeleteHorario(cadeiraID,horarioId):
    returnRedirect = confirmCredentials(1, 1)
    if returnRedirect != "":
        return redirect(returnRedirect)

    url = "http://127.0.0.1:5000//horarios_/"+horarioId

    headers = {
        'Authorization': 'Bearer ' + session['access_token'],
    }

    response = requests.request("DELETE", url, headers=headers, data={})

    return redirect("/admCadeiras/" + cadeiraID)