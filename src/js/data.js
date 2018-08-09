// Initialize Firebase
var config = {
  apiKey: 'AIzaSyAdd49IO1IpLA7KU2VcZithm89dPb_YxlU',
  authDomain: 'registrousuarios-1c6e3.firebaseapp.com',
  databaseURL: 'https://registrousuarios-1c6e3.firebaseio.com',
  projectId: 'registrousuarios-1c6e3',
  storageBucket: 'registrousuarios-1c6e3.appspot.com',
  messagingSenderId: '615254550849'
};
firebase.initializeApp(config);

btnSend.addEventListener('submit', (ev) => {
  let userNameValue = userName.value;
  let userLastNameValue = userLastName.value;
  let userEmailValue = userEmail.value;
  let userNumberValue = userNumber.value;

  if (userEmail.validity.typeMismatch) {
    userEmail.setCustomValidity('Ingresa un email valido');
    event.preventDefault(ev);
    window.history.back();
  } else {
    userEmail.setCustomValidity('');
  }
  let db = firebase.firestore();
  let dbRef = db.collection('user').add({
    name: userNameValue,
    last_name: userLastNameValue,
    email: userEmailValue,
    number: userNumberValue,
  }).then(function(docRef) {
    console.log('Document written with ID: ', docRef.id);
  })
    .catch(function(error) {
      console.error('Error adding document: ', error);
    });
});
