const tableBody = document.getElementById('show-data');

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

db.collection('user').onSnapshot((querySnapshot) => {
    querySnapshot.forEach(function(doc) {
      let data = doc.data();
        tableBody.innerHTML += `<tr>
      <th scope="row"><img class="user-photo" src="${data.blob}"></th>
      <td>${data.name}</td>
      <td>${data.email}</td>
      <td>${data.date}</td>
    </tr>`;
      });
    }).catch(function(error) {
    console.log('Error getting documents: ', error);
  });
