from flask import Flask
from flask_restful import Api, Resource, reqparse, abort, fields, marshal_with
from DBMySqlConnection import mysql 
from app import app
from UserModel import UserModel

user_put_args = reqparse.RequestParser()
user_put_args.add_argument("name", type=str, help="Name of the video is required", required=True)
user_put_args.add_argument("views", type=int, help="Views of the video", required=True)
user_put_args.add_argument("likes", type=int, help="Likes on the video", required=True)


class User(Resource):
    
    resource_fields = {
	'id': fields.Integer,
	'name': fields.String,
	'views': fields.Integer,
	'likes': fields.Integer
    }

    def __init__(self) -> None:
        self.conn = mysql.connect()
        self.cursor = self.conn.cursor()
        print("Constructor")

        
    
    
    def get(self):
        return "hello"

    @marshal_with(resource_fields)
    def put(self):
        args = user_put_args.parse_args()
        name=args['name']
        
        
        



# app = Flask(__name__)
# dbConn = DBMySqlConnection.__init__(app)

# conn = dbConn
# cursor =conn.cursor()

# class UserModel(db.Model):
#     userId = db.Column(db.Integer, primary_key = True)
#     userName = db.Column(db.String, nullable = False)
#     userEmailId = db.Column(db.String, nullable = False)
#     userPwd = db.Column(db.String, nullable = False)
#     userRole = db.Column(db.String, nullable = False)




