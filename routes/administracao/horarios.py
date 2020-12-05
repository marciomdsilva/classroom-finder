import requests
from flask import Blueprint, render_template, redirect, request, json, session
from routes.main import confirmCredentials

admHorarios = Blueprint('admHorarios', __name__, template_folder='templates')


@admHorarios.route('/admHorarios')
def admUtilizadoresTab():
    returnRedirect = confirmCredentials()
    if returnRedirect != "":
        return redirect(returnRedirect)

    session['page'] = "admHorarios"
    return render_template('administracao/horarios/listagem.html')
