from flask import Flask, render_template

app = Flask(__name__)

data = {
    'page': 'horarios',
    'access': 0
}


@app.route('/')
def hello_world():
    return render_template('index.html', data=data)
