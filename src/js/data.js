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

btnSend.addEventListener('click', (ev) => {
  event.preventDefault(ev);
  let userNameValue = userName.value;
  let userLastNameValue = userLastName.value;
  let userEmailValue = userEmail.value;
  let userNumberValue = userNumber.value;

  if (form.checkValidity() === true) {
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
  } else {
form.reportValidity();
  }
});
