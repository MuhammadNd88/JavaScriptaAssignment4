var displayArray = document.getElementById("qoute");
var previousBtn = document.getElementById("previous");
var nextBtn = document.getElementById("next");
var arrayQoute = ["Qoute 1", "Qoute 2", "Qoute 3", "Qoute 4", "Qoute 5"];
var pageBody = document.getElementsByTagName("div")[0];
var newImg = document.createElement("p");
pageBody.appendChild(newImg);

var newParagraph = document.getElementsByTagName("p")[0];
var paragraphText = document.createTextNode(arrayQoute);
newParagraph.appendChild(paragraphText);
var i = 0;
function nextQoute() {
  i++;
  if (i < 5) {
    console.log(arrayQoute[i]);
  } else {
    i = 0;
  }
}
nextBtn.addEventListener("click", nextQoute);
var l = 5;
function previousQoute() {
  if (l > 0) {
    l--;
    console.log(arrayQoute[l]);
  } else {
    i = 0;
  }
}
previousBtn.addEventListener("click", previousQoute);
