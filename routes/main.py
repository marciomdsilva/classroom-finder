from flask import Blueprint, render_template

main = Blueprint('main', __name__, template_folder='templates')

data = {
    'page': 'horarios',
    'access': 0,
}


@main.route('/')
@main.route('/horarios')
def horariotab():
    data['page'] = "horarios"
    return render_template('index.html', data=data)


@main.route('/mapa')
def maptab():
    data['page'] = "mapa"
    return render_template('index.html', data=data)


@main.route('/calendario')
def calendarTab():
    data['page'] = "calendario"
    return render_template('index.html', data=data)


@main.route('/definicoes')
def settingsTab():
    data['page'] = "definicoes"
    return render_template('index.html', data=data)
