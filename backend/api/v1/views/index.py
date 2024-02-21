#!/usr/bin/python3
"""exposes the default api routes
"""
from api.v1.views import app_views
from flask import jsonify


@app_views.route('/', strict_slashes=False)
def available():
    """returns available routes
    """
    public_get = [{"/status/": 'get the status of the application'}]
    auth_get = []
    auth_post = []
    auth_put = []
    auth_delete = []

    out = {"public_routes": {"get": public_get},
           "auth_required": {"get": auth_get,
                             "post": auth_post,
                             "put": auth_put,
                             "delete": auth_delete}
           }

    return jsonify(out)


@app_views.route('/status/', strict_slashes=False)
def status():
    """returns ok if the app is working
    """
    return jsonify({'status': 'OK'})
