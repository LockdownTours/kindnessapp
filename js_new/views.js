// hide all
function hideAll() {
  $(
    ".artistDisclaimer, .naughty-text, .kindnessLogo, .kindnessSuggestions, .homeBtnNav, .button1, .button2, .button3, .titleNav"
  ).hide();
  $(".button1, .button2, .button3").attr("disabled", false);
}

// homepage
function homepage() {
  hideAll();
  $(".kindnessBg").css("background-image", "url('img/UO6pL1X.jpg')");
  $(".kindnessLogo, .titleNav").show();
  $(".kindnessSuggestions")
    .show()
    .html(
      "<span class='red'>Sick of lockdown?</span> <br> Try one of 100+ Actions to make the world a better place to live in"
    );
  $(".button1")
    .show()
    .html("Click here to get started ❤️")
    .attr("onclick", "getData()");
  $(".button2")
    .show()
    .html("Click to find out more about this website 🧐")
    .attr("onclick", "about()");
  $(".button3")
    .show()
    .html("Click here to contact me 📬")
    .attr("onclick", "contact()");
}

var saveKindness;

// display kindness
function displayKindness(kindness) {
  hideAll();
  $(".kindnessBg").css("background-image", "url('img/" + kindness.image + "')");
  $(".artistDisclaimer, .homeBtnNav").show();
  $(".artistDisclaimer").html(
    "<span class='darkBlue'>" + kindness.credit + "</span>"
  );
  saveKindness = kindness;
  var website =
    " <u><a class='darkBlue' href='" +
    kindness.website +
    "'>" +
    kindness.website +
    "</a></u>";
  $(".kindnessSuggestions").show().html(kindness.line1);
  if (kindness.line2) {
    $(".kindnessSuggestions").append("<br>" + kindness.line2);
  }
  if (website) {
    $(".kindnessSuggestions").append(website);
  }
  $(".button1")
    .show()
    .html("Go to the next suggestion")
    .attr("onclick", "getData()");
  $(".button2")
    .show()
    .html("See the previous suggestion")
    .attr("onclick", "goBack()");

  $(".button3")
    .show()
    .html("Accept the challenge")
    .attr("onclick", "takeOnKindness()");
}

// about
function about() {
  hideAll();
  $(".kindnessBg").css("background-image", "url('img/kindnessLogo.png')");
  $(".homeBtnNav").show();
  var line1 =
    "<p>Two years ago I made the Kindness App <small>(almost 10,000 downloads on iOS and Android but whose counting)</small></p>";
  var line2 =
    "<p>This site, has +100 suggestions without any <span class='pink'>platitudes</span>, <span class='blue'>fluff</span> or <span class='green'>schmultz</span>.</p>";
  var line3 =
    "<p>If you have any feedback 📝  &nbsp; please get in touch 👋</p>";
  $(".kindnessSuggestions")
    .show()
    .html(line1 + line2 + line3);
  $(".button1").show().html("Click here to get started ❤️");
  $(".button3").show().html("Click here to contact me 📬");
}

// kindness selected
function kindnessSelected(state) {
  hideAll();
  if (state == "success") {
  } else {
    line1 =
      "Oh no! Something went wrong 😢 <br><u class='darkBlue' onclick='contact()'>Please click here to tell me what you were trying to do</u>? ";
    $(".kindnessSuggestions").show().html(line1);
    $(".button2").show().html("Go Home 🏠").attr("onclick", "homepage()");
  }
}

// contact
function contact() {
  hideAll();
  $(".kindnessBg").css("background-image", "url('img/kindnessLogo.png')");
  $(".homeBtnNav").show();
  var line1 = "<p class='red'>I would ❤️️&nbsp; to hear from you!</p>";
  var line2 =
    "<p>Please <a class='blue' href='https://twitter.com/mr_moonhead'><u>follow or hit me on twitter</u></a></p>";
  var line3 = "<p>Otherwise, please write to me below 📝</p>";
  var line4 =
    "<textarea class='p-2 mt-5 border w-full' rows='5' id='contact__message' placeholder='Please enter your message here'></textarea>";
  var line5 =
    '<div class="my-3 flex rounded-md shadow-sm"><span class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 bg-gradient-to-br from-yellow-400 p-1 bg-pink-500 text-sm">✉️</span><input type="text" id="contact__email" onkeyup="canSumbit()" class="border p-2 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="enter email address"/></div>';
  $(".kindnessSuggestions")
    .show()
    .html(line1 + line2 + line3 + line4 + line5);
  $(".button1")
    .show()
    .html("Submit")
    .attr("disabled", "true")
    .attr("onclick", "submitMessage()");
  $(".naughty-text").show().html("Cancel").attr("onclick", "homepage()");
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

// failed to load
function failedLoadGoogleData() {
  hideAll();
  var line1 = "<p>Unable to pull suggestions 😕</p>";
  $(".kindnessSuggestions").show().html(line1);

  $(".button1")
    .show()
    .html("Click here to try again")
    .attr("onclick", "tryAgain()");
}
