var usedKindnessInd = [];
var currentKindness = {};

function intKindness() {
  state = "kindness";
  var uniqueInt = uniqueRandomNum();
  // console.log("uniqueInt:", uniqueInt);
  // console.log('image: ', image[uniqueInt]);
  // IMAGE KUDOS
  // $(".imageKudos").show().html(thanks[uniqueInt]);
  // $(".tapLeft, .leftSwipeHitBox").show();
  // randomColor('#swipeColor1');
  // randomColor('#swipeColor2');
  // setup current Kindness
  currentKindness = {
    line1: line1[uniqueInt],
    line2: line2[uniqueInt],
    website: website[uniqueInt],
    image: image[uniqueInt],
    score: 0,
    date: Date.now(),
  };
  console.log("currentKindness: ", currentKindness);
  console.log("usedKindnessInd: ", usedKindnessInd);
}
function goBack() {
  // splice usedKindnessInd
  // return currentKindness
}

function uniqueRandomNum() {
  var randomNum = Math.floor(Math.random() * line1.length);
  while (usedKindnessInd.indexOf(randomNum) !== -1) {
    // pick again
    randomNum = Math.floor(Math.random() * line1.length);
  }
  usedKindnessInd.push(randomNum);
  return randomNum;
}
