from firebase import firebase
firebase = firebase.FirebaseApplication('https://dj-hack.firebaseio.com', None)
result = firebase.get('/dustbins/1518880087182', None)

print(result)
