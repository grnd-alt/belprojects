from flask import render_template,request,Flask,jsonify,redirect
import logging
import socket
app = Flask(__name__)
#logging.basicConfig(filename = 'demo.log',level=logging.DEBUG)
app.secret_key="Minecraft12"
@app.route("/",methods=["GET","POST"])
def main():
	return redirect("/tester")
	print("here now")
	if request.method == "POST":
		print(request.form["message"])
		print('here')
	return render_template("main.html")
@app.route("/control",methods = ["GET","POST"])
def controles():
	possibles = ["home","about","projects","contact"]
	if request.method == 'POST':
		button = request.form["button"]
		print(request.form)
		return render_template(button+".html")
	#return render_template("all_projects.html")
@app.route("/projects",methods = ["GET"])
def projects():
	return render_template("all_projects.html")
@app.route('/main',methods = ["POST"])
def handler():
	if request.method == 'POST':
		print(request.form["mail"],request.form['passwort'])
		return render_template('user_page.html')
@app.route('/tester')
def tester():
	print("hello")
	return render_template('user_page.html')
if __name__ == "__main__":
	app.run(host=socket.gethostbyname(socket.gethostname()), port=1337,debug = True)
