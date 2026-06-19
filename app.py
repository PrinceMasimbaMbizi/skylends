from flask import Flask, render_template, request, redirect, session

app = Flask(__name__)

app.secret_key = "skylend_secret_key"


@app.route('/')
def home():
    return render_template('index.html')


@app.route('/dashboard')
def dashboard():

    return render_template('dashboard.html')


@app.route('/login', methods=['POST'])
def login():

    username = request.form['username']
    password = request.form['password']

    print("LOGIN")
    print("Username:", username)
    print("Password:", password)

    return redirect('/dashboard')


@app.route('/register', methods=['POST'])
def register():

    fullname = request.form['fullname']
    email = request.form['email']
    username = request.form['username']
    password = request.form['password']

    print("REGISTER")
    print("Full Name:", fullname)
    print("Email:", email)
    print("Username:", username)
    print("Password:", password)

    return redirect('/dashboard')


if __name__ == "__main__":
    app.run(debug=True)