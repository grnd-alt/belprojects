from flask import render_template,request,Flask,jsonify,redirect
import logging
app = Flask(__name__)
logging.basicConfig(filename = 'demo.log',level=logging.DEBUG)
app.secret_key="Minecraft12"
@app.route("/",methods=["GET","POST"])
def main():
	return redirect("/tester")
	print("here now")
	if request.method == "POST":
		print(request.form["message"])
		print('here')
	return render_template("main.html")
@app.route('/main',methods = ["POST"])
def handler():
	if request.method == 'POST':
		print(request.form["mail"],request.form['passwort'])
		return render_template('user_page.html')
@app.route('/tester')
def tester():
	return render_template('user_page.html')
if __name__ == "__main__":
	app.run(host="192.168.1.101", port=1337,debug = True)
