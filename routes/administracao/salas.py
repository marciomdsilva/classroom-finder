import requests
from flask import Blueprint, render_template, redirect, request, json, session
from routes.main import confirmCredentials

admSalas = Blueprint('admSalas', __name__, template_folder='templates')


@admSalas.route('/admSalas', methods=['POST', 'GET'])
def admSalasTab():
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


@admSalas.route('/admSalas/criar', methods=['POST', 'GET'])
def admSalasCriar():
    returnRedirect = confirmCredentials(1, 1)
    if returnRedirect != "":
        return redirect(returnRedirect)

    data = {}
    files = {}
    if request.method == 'POST':
        url = "http://127.0.0.1:5000//salas_"
        data["identificacao"] = request.form.get("identificacao")
        data["lotacao"] = request.form.get("lotacao")
        data["andar"] = request.form.get("andar")
        if "mapa0" in request.files and request.files["mapa0"].filename != "":
            file = request.files['mapa0']
            files["mapa0"] = (file.filename, file.read(), file.content_type)
        if "mapa1" in request.files and request.files["mapa1"].filename != "":
            file = request.files['mapa1']
            files["mapa1"] = (file.filename, file.read(), file.content_type)
        if "mapa2" in request.files and request.files["mapa2"].filename != "":
            file = request.files['mapa2']
            files["mapa2"] = (file.filename, file.read(), file.content_type)

        headers = {
            'Authorization': 'Bearer ' + session['access_token'],
        }
        r = requests.request("POST", url, headers=headers, data=data, files=files)

        if r.status_code == 200 or r.status_code == 201:
            data["sala"] = r.json()
            data["msg"] = "Sala criada com sucesso"
        else:
            data["msg"] = "Ocorreu um problema na criação da sala"

    session['page'] = "admSalas"
    return render_template('administracao/salas/salaCreate.html', data=data)


@admSalas.route('/admSalas/<int:id>', methods=['POST', 'GET'])
def admSalasEditar(id):
    returnRedirect = confirmCredentials(1, 1)
    if returnRedirect != "":
        return redirect(returnRedirect)

    data = {}
    files = {}
    r = []
    x = 0
    if request.method == 'POST':
        x = 1
        url = "http://127.0.0.1:5000//salas_/" + str(id)
        data["identificacao"] = request.form.get("identificacao")
        data["lotacao"] = request.form.get("lotacao")
        data["andar"] = request.form.get("andar")

        if "mapa0" in request.files and request.files["mapa0"].filename != "":
            file = request.files['mapa0']
            files["mapa0"] = (file.filename, file.read(), file.content_type)
        if "mapa1" in request.files and request.files["mapa1"].filename != "":
            file = request.files['mapa1']
            files["mapa1"] = (file.filename, file.read(), file.content_type)
        if "mapa2" in request.files and request.files["mapa2"].filename != "":
            file = request.files['mapa2']
            files["mapa2"] = (file.filename, file.read(), file.content_type)
        headers = {
            'Authorization': 'Bearer ' + session['access_token'],
        }

        r = requests.request("PUT", url, headers=headers, data=data, files=files)

        if r.status_code == 200 or r.status_code == 201:
            data["sala"] = r.json()
            data["msg"] = "Sala editada com sucesso"
        else:
            data["msg"] = "Não foi possivel alterar os dados da sala, tente mais tarde"
    if (x == 1 and r.status_code != 200 and r.status_code != 201) or request.method != "POST":

        url = "http://127.0.0.1:5000//salas_/" + str(id)
        headers = {
            'Authorization': 'Bearer ' + session['access_token'],
        }
        r = requests.request(request.method, url, headers=headers, data={})
        if r.status_code == 200 or r.status_code == 201:
            data["sala"] = r.json()
        else:
            return redirect('/admSalas')

    session['page'] = "admSalas"
    return render_template('administracao/salas/salaEdit.html', data=data)
