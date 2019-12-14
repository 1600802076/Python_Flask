#!/usr/bin/python
# -*- coding: UTF-8 -*-
import json
from flask import Flask,redirect,url_for ,request ,render_template ,make_response ,flash

app = Flask(__name__)


@app.route("/success/")
def Success():
    xingming = request.cookies.get("User_ID")
    return render_template("welcome.html",name=xingming)

@app.route("/")
def index():
    # is_login = request.cookies.get("User_ID")
    # if not is_login:
    #     return render_template("index.html",make=13)
    # else:
    #     return redirect(url_for("Success"))
    return render_template("index.html")
@app.route("/success/return")
def relogin():
    return render_template("index.html",make=13)


@app.route("/Login",methods=["POST","GET"])
def Login():
    if request.method == "POST":

        #键值对形式的提交可以使用
        # request.values["name"]
        data = request.get_json()  #获取json值，返回字典类型
        repo = make_response(render_template("welcome.html"))
        repo.set_cookie("User_ID",data.get("name"))
        return repo

if __name__ == '__main__':
    app.run(debug=True)