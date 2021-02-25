function submitMessage() {
  // save email
  var email = $("#contact__email").val();
  var message = $("#contact__message").val();
  // save email to local
  saveData("email", email);
  // save to firebase
  saveFirebase("contact", { email, message });
}

function validateEmail(email) {
  console.log(2);
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function canSumbit() {
  $(".button1").attr("disabled", !validateEmail($("#contact__email").val()));
}
