import mysql.connector

mydb = mysql.connector.connect(
  host='localhost',
  user='root',
  password='0000',
  database='myflaskapp'
)

myCursor =mydb.cursor()
# myCursor.execute("CREATE TABLE ARTICLES (title VARCHAR (255) , Author VARCHAR(255), des VARCHAR(255) )")

def db():
    # myCursor.execute("SHOW tables")
    # for x in myCursor:
    #   print(x)
      
  print("database is connected ")