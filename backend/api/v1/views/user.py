#!/usr/bin/python3
from api.v1.db import users
from api.v1.views import app_views
from flask import jsonify, request
from os import getenv
from uuid import uuid4

API_KEY = getenv('API_KEY')


@app_views.route('/create_user/', strict_slashes=False,
                 methods=['POST'])
def create_user():
    """creates a new user
    """
    data = request.get_json()

    if not data:
        return jsonify({"error": "please provide user details in json"})

    name = data.get("name")

    if not name:
        return jsonify({"error": "please provide a name"})

    email = data.get("email")

    if not email:
        return jsonify({"error": "please provide an email"})

    password = data.get("password")

    if not password:
        return jsonify({"error": "please provide a password"})

    users.insert_one({
        "id": str(uuid4()),
        "name": name,
        "email": email,
        "password": password
    })

    return jsonify({"message": "user successfully created"})
