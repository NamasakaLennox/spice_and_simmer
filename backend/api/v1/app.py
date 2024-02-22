#!/usr/bin/python3
"""
define and register blueprint
"""
from api.v1.views import app_views
from flask import Flask, jsonify
from flask_cors import CORS
from flask_pymongo import PyMongo
from os import getenv

app = Flask(__name__)
app.register_blueprint(app_views)

CORS(app)


@app.errorhandler(404)
def page_not_found(error):
    """returns an error for page not found
    """
    return (jsonify({"error": "Not Found"}), 404)


if __name__ == '__main__':
    host = getenv('API_HOST')
    port = getenv('API_PORT')

    host = host if host else '0.0.0.0'
    port = port if port else '5000'

    app.run(host=host, port=port, threaded=True, debug=True)
