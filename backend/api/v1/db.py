#!/usr/bin/python3
from flask_pymongo import pymongo
from os import getenv

MONGO_PASS = getenv('MONGO_PASS')
MONGO_URI = f'mongodb+srv://namasaka:{MONGO_PASS}@cluster0.ojz6wa6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

client = pymongo.MongoClient(MONGO_URI)
db = client.get_database('spice_and_simmer')
users = pymongo.collection.Collection(db, 'users')
favourites = pymongo.collection.Collection(db, 'favourites')
