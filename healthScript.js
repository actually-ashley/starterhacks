
var boxList = ["monBox", "tuesBox", "wedBox", "thursBox", "friBox"];
var ulList = ["monUL", "tuesUL", "wedUL", "thursUL", "friUL"];
var inputList = ["monInput", "tuesInput", "wedInput", "thursInput", "friInput"];

// Create a "close" button and append it to each list item

var j;
for (j = 0; j < ulList.length; j++) {
  var day = document.getElementById(ulList[j]);
  day.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
    }
  }, false);

}
