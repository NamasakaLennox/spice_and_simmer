#!/usr/bin/python3
"""defines blueprints
"""
from flask import Blueprint

app_views = Blueprint('app_views', __name__, url_prefix='/api/v1')

from api.v1.auth import login
from api.v1.views.index import *
from api.v1.views.favourite import *
from api.v1.views.fetch import *
from api.v1.views.user import *
