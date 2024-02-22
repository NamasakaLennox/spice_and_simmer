#!/usr/bin/python3
"""
module to fetch different items from database
"""
from api.v1.views import app_views
from flask import jsonify, request
from os import getenv

import requests

API_KEY = getenv('API_KEY')


@app_views.route('/search/', strict_slashes=False,
                 methods=['POST'])
def search():
    """handles search for a menu item
    """
    BASE_URL = 'https://api.spoonacular.com/recipes/complexSearch'
    data = request.get_json()

    if not data:
        # returns only first 10 elements
        # need to work next page fetch
        params = {"apiKey": API_KEY}
        res = requests.get(BASE_URL, params=params)
        return jsonify(res.json())

    query = data.get('query') if data.get('query') else ""
    cuisine = data.get('cuisine') if data.get('cuisine') else ""
    diet = data.get('diet') if data.get('diet') else ""
    intolerances = data.get('intolerances') if data.get('intolerances') else ""

    params = {"apiKey": API_KEY, "query": query,
              "cuisine": cuisine, "diet": diet,
              "intolerances": intolerances
              }

    res = requests.get(BASE_URL, params=params)

    return jsonify(res.json())


@app_views.route('/search/<id>', strict_slashes=False)
def get_item(id):
    """gets details of a specific meal by id
    """
    BASE_URL = f'https://api.spoonacular.com/recipes/{id}/information'

    params = {"apiKey": API_KEY}
    res = requests.get(BASE_URL, params=params)

    return jsonify(res.json())


@app_views.route('/similar/<id>', strict_slashes=False)
def get_similar(id):
    """gets similar items to the one currently being viewed
    """
    BASE_URL = f'https://api.spoonacular.com/recipes/{id}/similar'

    params = {"apiKey": API_KEY}
    res = requests.get(BASE_URL, params=params)

    return jsonify(res.json())

@app_views.route('/random/', strict_slashes=False)
def get_random():
    """returns a random recipe
    """
    BASE_URL = 'https://api.spoonacular.com/recipes/random'

    params = {"apiKey": API_KEY}
    res = requests.get(BASE_URL, params=params)

    return jsonify(res.json())


@app_views.route('/nutrition/<id>/', strict_slashes=False)
def get_nutrition(id):
    """returns the nutritional information about a given recipe
    """
    BASE_URL = f'https://api.spoonacular.com/recipes/{id}/nutritionWidget.json'

    params = {"apiKey": API_KEY}
    res = requests.get(BASE_URL, params=params)

    return jsonify(res.json())
