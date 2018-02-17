from firebase import firebase
import json

firebase = firebase.FirebaseApplication('https://dj-hack.firebaseio.com', None)
result = firebase.get('/dustbins/1518880087182', None)
data = {'cash': 70, 'currentUser': '', 'parent': '', 'percentFull': 100, 'queryText': 'Daddy 2 wants to buy a dustbin from Daddy 1', 'queryType': 0, 'streak': 0}
data = json.dumps(data)
firebase.post('/dustbins/1518880087182', data )

