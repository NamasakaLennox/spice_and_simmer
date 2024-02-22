#!/usr/bin/python3
"""Defines a route authenticator for the app
"""
from api.v1.db import users
from api.v1.views import app_views
from datetime import datetime, timedelta
from flask import jsonify, make_response, request
from functools import wraps
from hashlib import md5
from os import getenv

import jwt

SECRET_KEY = getenv('SECRET_KEY')


def token_required(f):
    """secures routes by checking if given token is valid
    """
    @wraps(f)
    def decorated(*args, **kwargs):
        token = None

        if 'x-access-token' in request.headers:
            token = request.headers['x-access-token']

        if not token:
            return jsonify({'message': 'Auth token is missing!'}), 401

        try:
            data = jwt.decode(token, SECRET_KEY, algorithms=['HS256'])
        except:
            return jsonify({'message': 'Token expired or is invalid',
                            'alert': 'Please Log In Again'})


        current_user = users.find_one({'email': data['email']})

        if not current_user:
            return jsonify({'message': 'Token is invalid!'}), 401

        return f(current_user, *args, **kwargs)

    return decorated


@app_views.route('/login/', strict_slashes=False,
                 methods=['POST'])
def login():
    """validates a user login and assigns a web token
    """
    body = request.get_json()
    email = body.get('email')

    if not email:
        return jsonify({'error': 'please provide an email address'})

    user = users.find_one({'email': email})

    if not user:
        return (make_response(jsonify({
            'error': 'Ivalid email! No user found'
        }), 401, {
            'WWW-Authenticate' : 'Basic realm="Login required!"'
        }))

    password = body.get('password')
    password = md5(password.encode()).hexdigest()

    if (user['password'] == password):
        token = jwt.encode(
            {'id': user['id'],
             'exp': datetime.utcnow() + timedelta(hours=24)
             }, SECRET_KEY, algorithm='HS256')

        response = jsonify({'token': token,
                            'user': {
                                'id': user['id'],
                                'name': user['name'],
                                'email': user['email']
                            }})

        return response, 200

    return (make_response(
        {'error': 'Invalid Password'}, 401,
        {'WWW-Authenticate' : 'Basic realm="Login required!"'}))
