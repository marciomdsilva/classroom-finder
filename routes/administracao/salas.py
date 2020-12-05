import requests
from flask import Blueprint, render_template, redirect, request, json, session
from routes.main import confirmCredentials

admSalas = Blueprint('admSalas', __name__, template_folder='templates')


@admSalas.route('/admSalas')
def admUtilizadoresTab():
    returnRedirect = confirmCredentials()
    if returnRedirect != "":
        return redirect(returnRedirect)

    session['page'] = "admSalas"
    return render_template('administracao/salas/listagem.html')
