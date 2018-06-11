from flask import flask
app=Flask(__name__)
@app.route("/")
def hello():
    retrun """
    <html>
    <head><title>This is my flask app</title></head>
    <body><h1>Hello from flask</h1></body>
    </html>
    """

if __name__=="__main__":
    app.run(debug=True)
