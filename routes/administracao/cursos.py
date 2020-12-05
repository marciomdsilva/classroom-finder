import requests
from flask import Blueprint, render_template, redirect, request, json, session
from routes.main import confirmCredentials
admCursos = Blueprint('admCursos', __name__, template_folder='templates')

@admCursos.route('/admCursos')
def admCursosTab():
    returnRedirect = confirmCredentials()
    if returnRedirect != "":
        return redirect(returnRedirect)

    session['page'] = "admCursos"
    return render_template('administracao/cursos/listagem.html')

