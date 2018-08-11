// Initialize Firebase
let config = {
  apiKey: 'AIzaSyAdd49IO1IpLA7KU2VcZithm89dPb_YxlU',
  authDomain: 'registrousuarios-1c6e3.firebaseapp.com',
  databaseURL: 'https://registrousuarios-1c6e3.firebaseio.com',
  projectId: 'registrousuarios-1c6e3',
  storageBucket: 'registrousuarios-1c6e3.appspot.com',
  messagingSenderId: '615254550849'
};

firebase.initializeApp(config);
let db = firebase.firestore();
let storage = firebase.storage();
let blobURL = '';
// WebCamera Functionality 
let handleSuccess = function(stream) {
  // Attach the video stream to the video element and autoplay.
  player.srcObject = stream;
  videoTracks = stream.getVideoTracks();
    
  captureButton.addEventListener('click', function() {
    let context = snapshot.getContext('2d');
    // Draw the video frame to the canvas.
    context.drawImage(player, 0, 0, snapshotCanvas.width, 
      snapshotCanvas.height);
    videoTracks.forEach(function(track) {
      track.stop();
    });

    snapshotCanvas.toBlob(function(blob) {
      let newImg = document.createElement('img'),
        url = URL.createObjectURL(blob);
      blobURL += url;
      // console.log(url);
      let ref = firebase.storage().ref('fotos/');
      ref.put(blob).then(function(snapshot) {
        // console.log('Uploaded a blob or file!');
      });
    });
  });
}; 
navigator.mediaDevices.getUserMedia({video: true})
  .then(handleSuccess);
      
// Send Form
btnSend.addEventListener('click', (ev) => {
  event.preventDefault(ev);
  let userNameValue = userName.value;
  let userEmailValue = userEmail.value;
  let userNumberValue = userNumber.value;
  

  if (form.checkValidity() === true) {
    let dbRef = db.collection('user').add({
      name: userNameValue,
      email: userEmailValue,
      number: userNumberValue,
      blob: blobURL
    }).then(function(docRef) {
      // console.log('Document written with ID: ', docRef.id);
    })
      .catch(function(error) {
        // console.error('Error adding document: ', error);
      });
  } else {
    form.reportValidity();
  }
});

// Get Data from Database
db.collection('user').get().then(function(querySnapshot) {
  querySnapshot.forEach(function(doc) {
    // doc.data() is never undefined for query doc snapshots
    // console.log(doc.id, " => ", doc.data());
    // console.log(doc.data().blob);
    newImg = document.createElement('img');
    newImg.src = doc.data().blob;
    // document.body.appendChild(newImg);
  });
});

// Obteniendo Info del JSON
window.onload = () => {
  fetch('../data/trabajadores.json')
    .then(response => response.json()).then((data) => {
      listeners(data);
    });
};


// función para el envio de notificación por email

(function() {
  emailjs.init('user_tQKEqfp1RDoxkEfhRcUTw');
})();

const vue = new Vue({
  el: '#app',
  data() {
    return {
      from_name: '',
      from_email: '',
    };
  },
  methods: {
    enviar() {
      let data = {
        from_name: this.from_name,
        from_email: this.from_email,
      };

      emailjs.send('gmail', 'notificaci_n_de_visita', data)
        .then(function(response) {
          if (response.text === 'OK') {
            alert('El correo se ha enviado de forma exitosa');
          }
          // console.log('SUCCESS. status=%d, text=%s', response.status, response.text);
        }, function(err) {
          alert('Ocurrió un problema al enviar el correo');
          // console.log('FAILED. error=', err);
        });
    }
  }
});

// console.log(vue)
vue.enviar();
