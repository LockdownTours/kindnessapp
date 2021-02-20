function submitMessage() {
  // save email
  var email = $("#contact__email").val();
  var message = $("#contact__message").val();
  // save email to local
  saveData("email", email);
  // save to firebase
  saveContact({ email, message });
}

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
