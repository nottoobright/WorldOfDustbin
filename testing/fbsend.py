from firebase import firebase
firebase = firebase.FirebaseApplication('https://dj-hack.firebaseio.com', None)
result = firebase.get('/dustbins', None)
print(result)

