from flask import Flask, render_template
from flask_restful import Api

app = Flask(__name__)
api = Api(app)

data = {
    'page': 'horarios',
    'access': 0
}


@app.route('/')
def hello_world():
    return render_template('index.html', data=data)


if __name__ == "__main__":
    app.run(port=5000, debug=True)
