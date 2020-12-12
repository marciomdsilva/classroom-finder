import requests
from flask import Blueprint, render_template, redirect, request, json, session
from routes.main import confirmCredentials

admCursos = Blueprint('admCursos', __name__, template_folder='templates')


@admCursos.route('/admCursos')
def admCursosTab():
    returnRedirect = confirmCredentials(1, 1)
    if returnRedirect != "":
        return redirect(returnRedirect)

    session['page'] = "admCursos"
    return render_template('administracao/cursos/listagem.html')


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


@admCursos.route('/admCursos/pesquisar')
def admCursosPesquisar():
    returnRedirect = confirmCredentials(1, 1)
    if returnRedirect != "":
        return redirect(returnRedirect)

    return
