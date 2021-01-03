import requests
from flask import Blueprint, render_template, redirect, request, json, session
from routes.main import confirmCredentials

admUtilizadores = Blueprint('admUtilizadores', __name__, template_folder='templates')


@admUtilizadores.route('/admUtilizadores', methods=['POST', 'GET'])
def admUtilizadoresTab():
    returnRedirect = confirmCredentials(1, 1)
    if returnRedirect != "":
        return redirect(returnRedirect)
    data = {}

    url = "http://127.0.0.1:5000//user"
    if request.method == 'POST':
        url = "http://127.0.0.1:5000//user?search=" + request.form.get("search")
        data["search"] = request.form.get("search")

    headers = {
        'Authorization': 'Bearer ' + session['access_token'],
    }
    r = requests.request("GET", url, headers=headers, data={})

    if r.status_code == 200:
        data["users"] = r.json()["users"]
        session['page'] = "admUtilizadores"
        return render_template('administracao/utilizadores/listagem.html', data=data)
    else:
        return redirect("/")


@admUtilizadores.route('/admUtilizadores/<userId>')
def admUtilizadoresEdit(userId):
    returnRedirect = confirmCredentials(1, 1)
    if returnRedirect != "":
        return redirect(returnRedirect)
    data = {}

    url = "http://127.0.0.1:5000//user/" + userId
    headers = {
        'Authorization': 'Bearer ' + session['access_token'],
    }
    r = requests.request("GET", url, headers=headers, data={})

    url = "http://127.0.0.1:5000//cursos_"
    headers = {
        'Authorization': 'Bearer ' + session['access_token'],
    }
    r1 = requests.request("GET", url, headers=headers, data={})

    url = "http://127.0.0.1:5000//cadeiras_"
    headers = {
        'Authorization': 'Bearer ' + session['access_token'],
    }
    r2 = requests.request("GET", url, headers=headers, data={})

    if r.status_code == 200:
        data["users"] = r.json()
        data["cursos"] = r1.json()["cursos"]
        data["cadeiras"] = r2.json()["cadeiras"]
        return render_template('administracao/utilizadores/userEdit.html', data=data)
    else:
        return redirect("/")


@admUtilizadores.route('/admUtilizadores/<userId>', methods=['POST'])
def admUtilizadoresSave(userId):
    returnRedirect = confirmCredentials(1, 1)
    if returnRedirect != "":
        return redirect(returnRedirect)
    data = {}

    data["name"] = request.form.get("nome")
    data["access"] = request.form.get("acesso")
    if (data["access"] == "2"):
        data["cursos"] = []
        data["cadeiras"] = []
    else:
        data["cursos"] = request.form.getlist("curso[]")
        data["cadeiras"] = request.form.getlist("cadeiras[]")
    payload = json.dumps(data)
    url = "http://127.0.0.1:5000//user/" + userId
    headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + session['access_token'],
    }
    r = requests.request("PUT", url, headers=headers, data=payload)

    return redirect("/admUtilizadores/" + userId)


@admUtilizadores.route('/admUtilizadores/create', methods=['GET'])
def admUtilizadoresCreate2():
    returnRedirect = confirmCredentials(1, 1)
    if returnRedirect != "":
        return redirect(returnRedirect)
    data = {}

    return render_template("administracao/utilizadores/userCreate.html", data=data)


@admUtilizadores.route('/admUtilizadores/create', methods=['POST'])
def admUtilizadoresCreate():
    returnRedirect = confirmCredentials(1, 1)
    if returnRedirect != "":
        return redirect(returnRedirect)
    data = {}

    url = "http://127.0.0.1:5000//register"

    data["name"] = request.form.get("nome")
    data["access"] = request.form.get("acesso")
    if (data["access"] == "2"):
        data["cursos"] = []
        data["cadeiras"] = []
    else:
        data["cursos"] = request.form.getlist("curso[]")
        data["cadeiras"] = request.form.getlist("cadeiras[]")
    payload = json.dumps(data)

    headers = {
        'Authorization': 'Bearer ' + session['access_token'],
    }
    r = requests.request("POST", url, headers=headers, data=payload)

    if r.status_code == 200:
        return redirect("/admUtilizadores")
    else:
        return redirect("/")
