import requests
from flask import Blueprint, render_template, redirect, request, json, session
from routes.main import confirmCredentials
admCadeiras = Blueprint('admCadeiras', __name__, template_folder='templates')

@admCadeiras.route('/admCadeiras')
def admCadeirasTab():
    returnRedirect = confirmCredentials()
    if returnRedirect != "":
        return redirect(returnRedirect)

    session['page'] = "admCadeiras"
    return render_template('administracao/cadeiras/listagem.html')

