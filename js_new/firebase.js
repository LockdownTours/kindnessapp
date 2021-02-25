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

function saveFirebase(key, propertiesToSave) {
  return firebase
    .database()
    .ref(key + "/")
    .push(propertiesToSave, function (error) {
      if (error) {
        if (key == "contact") {
          messageSent("failure");
        }
        if (key == "kindness") {
          kindnessSelected("failure");
        }
      } else {
        if (key == "contact") {
          messageSent("success");
        } else {
          kindnessSelected("success");
        }
      }
    })
    .getKey();
}

function kindnessSelected(propertiesToSave) {
  return firebase
    .database()
    .ref("selected/")
    .push(propertiesToSave, function (error) {
      if (error) {
      } else {
      }
    })
    .getKey();
}
