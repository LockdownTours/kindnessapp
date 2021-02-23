// check if email is assigned to user
function getEmail() {
  var propertiesToCheck = loadData();
  var email = propertiesToCheck.email;
  if (email && email.length > 0) {
    return email;
  } else {
    false;
  }
}

function takeOnKindness() {
  console.log(saveKindness);
}

// save data
function saveData(key, data) {
  var savedData = loadData();
  savedData[key] = data;
  localStorage.setItem("userData", JSON.stringify(savedData));
}

// retrieve the object from storage
function loadData() {
  var retrievedObject = localStorage.getItem("userData");
  if (!retrievedObject) {
    return {};
  }
  return JSON.parse(retrievedObject);
}

// message sent
function messageSent(state) {
  $(".homeBtnNav").show();
  hideAll();
  if (state == "success") {
    line1 = "Message sent 💌 <br>Thanks so much! 😘 ";
  } else if (state == "failure") {
    line1 =
      "Oh no! Something went wrong 😢 <br><a class='blue' href='https://twitter.com/mr_moonhead'><u>Mind DMing me on twitter</u></a>? ";
  }
  $(".kindnessSuggestions").show().html(line1);
  $(".button2").show().html("Go Home 🏠").attr("onclick", "homepage()");
}
