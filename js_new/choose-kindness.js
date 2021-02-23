var usedKindnessInd = [];

function intKindness(currentKindness) {
  state = "kindness";
  var uniqueInt = uniqueRandomNum(currentKindness.line1);
  currentKindness = {
    line1: currentKindness.line1[uniqueInt],
    line2: currentKindness.line2[uniqueInt],
    website: currentKindness.website[uniqueInt],
    image: currentKindness.image[uniqueInt],
    credit: currentKindness.thanks[uniqueInt],
    score: 0,
    date: Date.now(),
  };
  displayKindness(currentKindness);
  console.log(usedKindnessInd);
  canGoBack();
}
function goBack() {
  // splice usedKindnessInd
  usedKindnessInd.splice(-1, 1);

  // last usedKindness ind
  var lastInd = usedKindnessInd[usedKindnessInd.length - 1];
  // return currentKindness
  previousKindness = {
    line1: currentKindness.line1[lastInd],
    line2: currentKindness.line2[lastInd],
    website: currentKindness.website[lastInd],
    image: currentKindness.image[lastInd],
    credit: currentKindness.thanks[lastInd],
    score: 0,
    date: Date.now(),
  };

  displayKindness(previousKindness);
  $(".button2").html("Click here to keep cycling previous suggestions");
  canGoBack();
}

function canGoBack() {
  if (usedKindnessInd.length > 1) {
    $(".button2").attr("disabled", false);
  } else {
    $(".button2").attr("disabled", true);
  }
}

function uniqueRandomNum(line1) {
  var randomNum = Math.floor(Math.random() * line1.length);
  while (usedKindnessInd.indexOf(randomNum) !== -1) {
    // pick again
    randomNum = Math.floor(Math.random() * line1.length);
  }
  usedKindnessInd.push(randomNum);
  return randomNum;
}
