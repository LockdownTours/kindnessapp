function randomAnimation() {
  var animations = [
    "animate__flipInX",
    "animate__flipInY",
    "animate__rotateIn",
    "animate__flip",
    "animate__jackInTheBox",
  ];
  var random = Math.floor(Math.random() * animations.length);
  $("#animationsHere").removeClass();
  setTimeout(function () {
    $("#animationsHere").addClass("animate__animated " + animations[random]);
  }, 5);
}

// not so into animations:
// animate__zoomIn animate__rollIn animate__zoomIn animate__zoomIn
// "animate__lightSpeedInRight",
// "animate__lightSpeedInLeft",
