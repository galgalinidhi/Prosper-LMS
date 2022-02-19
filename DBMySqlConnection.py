# from flask import Flask
from flaskext.mysql import MySQL
# from flask_mysqldb import MySQL
from app import app



mysql = MySQL()
app.config['MYSQL_DATABASE_USER'] = 'root'
app.config['MYSQL_DATABASE_PASSWORD'] = 'Team_terra125'
app.config['MYSQL_DATABASE_DB'] = 'Prosper'
app.config['MYSQL_DATABASE_HOST'] = 'localhost'
mysql.init_app(app)
    

# from app import app
# from flaskext.mysql import MySQL
# mysql = MySQL()

# # MySQL configurations
# app.config[‘MYSQL_DATABASE_USER’] = ‘root’
# app.config[‘MYSQL_DATABASE_PASSWORD’] = ‘’
# app.config[‘MYSQL_DATABASE_DB’] = ‘’
# app.config[‘MYSQL_DATABASE_HOST’] = ‘’
# mysql.init_app(app)


