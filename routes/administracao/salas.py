import requests
from flask import Blueprint, render_template, redirect, request, json, session
from routes.main import confirmCredentials

admSalas = Blueprint('admSalas', __name__, template_folder='templates')


@admSalas.route('/admSalas' , methods=['POST','GET'])
def admUtilizadoresTab():
    returnRedirect = confirmCredentials(1, 1)
    if returnRedirect != "":
        return redirect(returnRedirect)

    url = "http://127.0.0.1:5000//salas_"
    data = {}
    if request.method == 'POST':
        url = "http://127.0.0.1:5000//salas_?search=" + request.form.get("procurar")
        data["form"] = request.form.get("procurar")

    headers = {
        'Authorization': 'Bearer ' + session['access_token'],
    }
    r = requests.request("GET", url, headers=headers, data={})

    if r.status_code == 200:
        data["salas"] = r.json()["salas"]
        session['page'] = "admSalas"
        return render_template('administracao/salas/listagem.html', data=data)
    else:
        return redirect("/")
