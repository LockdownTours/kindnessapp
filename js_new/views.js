function homepage() {
  hideAll();
  $(".kindnessSuggestions")
    .show()
    .html("100+ Actions to make the world a better place to live in");
  $(".button1").show().html("Click here to get started ❤️");
  $(".button2").show().html("Click to find out more about this website 🧐");
  $(".button3").show().html("Click here to contact me 📬");
  $(".titleNav").show();
}

function hideAll() {
  $(
    ".kindnessSuggestions, .homeBtnNav, .button1, .button2, .button3, .titleNav"
  ).hide();
}
