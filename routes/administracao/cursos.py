import requests
from flask import Blueprint, render_template, redirect, request, json, session
from routes.main import confirmCredentials

admCursos = Blueprint('admCursos', __name__, template_folder='templates')


@admCursos.route('/admCursos' , methods=['POST','GET'])
def admCursosTab():
    returnRedirect = confirmCredentials(1, 1)
    if returnRedirect != "":
        return redirect(returnRedirect)

    url="http://127.0.0.1:5000//cursos_"
    data = {}
    if request.method == 'POST':
        url = "http://127.0.0.1:5000//cursos_?search="+request.form.get("procurar")
        data["form"]=request.form.get("procurar")

    headers = {
        'Authorization': 'Bearer ' + session['access_token'],
    }
    r = requests.request("GET", url, headers=headers, data={})

    if r.status_code == 200:
        data["cursos"] = r.json()["cursos"]
        session['page'] = "admCursos"
        return render_template('administracao/cursos/listagem.html', data=data)
    else:
        return redirect("/")


@admCursos.route('/admCursos/criar')
def admCursosCriar():
    returnRedirect = confirmCredentials(1, 1)
    if returnRedirect != "":
        return redirect(returnRedirect)

    return render_template('administracao/cursos/cursoCriar.html')


@admCursos.route('/admCursos/editar')
def admCursosEditar():
    returnRedirect = confirmCredentials(1, 1)
    if returnRedirect != "":
        return redirect(returnRedirect)

    return

