var firebaseConfig = {
  apiKey: "AIzaSyDcTrvSzLTiS2eG2Qa5oCKcESJHwcX8Rc8",
  authDomain: "lockdowntours-2462b.firebaseapp.com",
  databaseURL: "https://lockdowntours-2462b.firebaseio.com",
  projectId: "lockdowntours-2462b",
  storageBucket: "lockdowntours-2462b.appspot.com",
  messagingSenderId: "840910521569",
  appId: "1:840910521569:web:72328ff4fc1bd2941963a0",
  measurementId: "G-P8S69EY9NK",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

function saveContact(propertiesToSave) {
  debugger;
  return firebase
    .database()
    .ref("contact/")
    .push(propertiesToSave, function (error) {
      if (error) {
        console.log("New save error: ", error);
      } else {
        console.log("Contact saved: ", propertiesToSave);
      }
    })
    .getKey();
}
