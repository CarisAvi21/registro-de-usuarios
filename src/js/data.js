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
          console.log(blobURL); 
        newImg.onload = function() {
          // no longer need to read the blob so it's revoked
          URL.revokeObjectURL(url);
        };
      });
    });
  } 
    navigator.mediaDevices.getUserMedia({video: true})
      .then(handleSuccess); 
      
// Send Form
btnSend.addEventListener('click', (ev) => {
  event.preventDefault(ev);
  let userNameValue = userName.value;
  let userLastNameValue = userLastName.value;
  let userEmailValue = userEmail.value;
  let userNumberValue = userNumber.value;

  if (form.checkValidity() === true) {
    let dbRef = db.collection('user').add({
      name: userNameValue,
      last_name: userLastNameValue,
      email: userEmailValue,
      number: userNumberValue,
      blob: blobURL
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


// Get Data from Database
db.collection("user").get().then(function(querySnapshot) {
  querySnapshot.forEach(function(doc) {
      // doc.data() is never undefined for query doc snapshots
      //console.log(doc.id, " => ", doc.data());
      console.log(doc.data().blob);
       newImg = document.createElement('img');
      newImg.src = doc.data().blob;
    document.body.appendChild(newImg);
  });
});