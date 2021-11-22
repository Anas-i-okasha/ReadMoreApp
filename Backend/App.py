from flask import Flask
from mydb import db

app=Flask(__name__)


@app.route('/')
def index():
    db()
    return "Anas okasha new app using flask"

# @app.route('/get',methods=['GET'])
# def newGet():
#     print(request.method)
#     print(request.path)
#     print("server side anas okasha")
#     return jsonify({"server side flask":"anas"})


# @app.route('/post',methods=['POST'])
# def addN():
#     req=request.json
#     name=req['name']
#     return ({"responce":'my name is : '+name})



if __name__=='__main__':
    app.run(debug=True)