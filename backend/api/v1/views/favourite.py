#!/usr/bin/python3
from api.v1.db import favourites
from api.v1.views import app_views
from flask import jsonify, request, Response
from os import getenv
from bson import json_util
from json import loads


API_KEY = getenv('API_KEY')


# define a get favourites route that takes in a user id
@app_views.route('/favourites/<id>', strict_slashes=False)
def get_favourites(id):
    """returns favourite items for a user
    """
    cursor = favourites.find({"userId": id})

    if cursor:
        list_cursor = list(cursor)
        string = json_util.dumps(list_cursor)

        return jsonify(loads(string))

    return jsonify({"error": "No items added to favourites for this user"})


@app_views.route('/add_favourites/', strict_slashes=False,
                 methods=['POST'])
def add_to_favourites():
    """adds a new item to favourites
    """
    favourite = request.get_json()

    if not favourite:
        return jsonify({'error': 'please provide data to be added'})

    check = favourites.find_one({"id": favourite['id'], 'userId': favourite['userId']})

    if check:
        return jsonify({'message': 'Item already added to favourites'})

    favourites.insert_one(favourite)

    return ({'message': 'successfully added to favourites'})
