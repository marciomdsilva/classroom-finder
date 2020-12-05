import requests
from flask import Blueprint, render_template, redirect, request, json, session
from routes.main import confirmCredentials

admUtilizadores = Blueprint('admUtilizadores', __name__, template_folder='templates')


@admUtilizadores.route('/admUtilizadores')
def admUtilizadoresTab():
    returnRedirect = confirmCredentials(1, 1)
    if returnRedirect != "":
        return redirect(returnRedirect)

    session['page'] = "admUtilizadores"
    return render_template('administracao/utilizadores/listagem.html')
