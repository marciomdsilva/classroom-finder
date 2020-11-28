from flask import Flask, render_template
from flask_restful import Api

app = Flask(__name__)
api = Api(app)

# data = {
#     'page': 'horarios',
#     'access': 0
# }

@app.route('/')
def hello_world():
    return render_template('index.html', data=data)


@app.route('/<horarios>')
def horarioTab(horarios):
    return render_template('index.html', data=horarios)


@app.route('/<mapa>')
def mapTab(mapa):
    return render_template('index.html', data=mapa)


@app.route('/<calendario>')
def calendarTab(calendario):
    return render_template('index.html', data=calendario)


@app.route('/<definicoes>')
def settingsTab(definicoes):
    return render_template('index.html', data=definicoes)


if __name__ == '__main__':
    app.run(debug=True)