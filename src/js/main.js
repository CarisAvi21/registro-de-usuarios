const userName = document.getElementById('user-name');
const userEmail = document.getElementById('user-email');
const userNumber = document.getElementById('user-number');
const userReason = document.getElementById('user-reason');
const btnSend = document.getElementById('btn-send');
const form = document.getElementsByTagName('form')[0];
const player = document.getElementById('player');
const snapshotCanvas = document.getElementById('snapshot');
const captureButton = document.getElementById('capture');
let videoTracks;
let userVisit = document.getElementById('user-visit');


const home = () => {
  window.location.assign('views/index.html');
};