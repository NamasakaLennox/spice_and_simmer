#!/usr/bin/python3
from api.v1.db import favourites
from api.v1.views import app_views
from flask import jsonify, request
from os import getenv

API_KEY = getenv('API_KEY')


# define a get favourites route that takes in a user id
@app_views.route('/favourites/<id>', strict_slashes=False)
def get_favourites(id):
    """returns favourite items for a user
    """
    return jsonify({'message': 'under construction'})


@app_views.route('/add_favourites/', strict_slashes=False,
                 methods=['POST'])
def add_to_favourites():
    """adds a new item to favourites
    """
    data = request.get_json()

    if not data:
        return jsonify({'error': 'please provide data to be added'})

    favourite = data.get('data')

    if not favourite:
        return jsonify({'error': 'please provide data with label as "data"'})

    favourites.insert_one(favourite)

    return ({'message': 'successfully added to favourites'})
