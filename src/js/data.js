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

  let db = firebase.firestore();
  let dbRef = db.collection('user').add({
    name: userNameValue,
    last_name: userLastNameValue,
    email: userEmailValue,
    number: userNumberValue
  }).then(function(docRef) {
    console.log('Document written with ID: ', docRef.id);
  })
    .catch(function(error) {
      console.error('Error adding document: ', error);
    });
});


(function() {
  emailjs.init('<YOUR USER ID>');
})();
const vue = new Vue({
  el: '#app',
  data() {
    return {
      user_name: '',
      user_email: '',
      message: '',
      subject: '',
    };
  },
  methods: {
    enviar() {
      let data = {
        from_name: this.from_name,
        from_email: this.from_email,
        message: this.message,
        subject: this.subject,
      };
                        
      emailjs.send('<user_tQKEqfp1RDoxkEfhRcUTw>', '< notificaci_n_de_visita>', data)
        .then(function(response) {
          if (response.text === 'OK') {
            alert('El correo se ha enviado de forma exitosa');
          }
          console.log('SUCCESS. status=%d, text=%s', response.status, response.text);
        }, function(err) {
          alert('Ocurrió un problema al enviar el correo');
          console.log('FAILED. error=', err);
        });
    }
  }
});
