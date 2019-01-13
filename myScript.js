
var boxList = ["monBox", "tuesBox", "wedBox", "thursBox", "friBox"];
var ulList = ["monUL", "tuesUL", "wedUL", "thursUL", "friUL"];
var inputList = ["monInput", "tuesInput", "wedInput", "thursInput", "friInput"];

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}


var j;
for (j = 0; j < ulList.length; j++) {
  var day = document.getElementById(ulList[j]);
  day.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
    }
  }, false);

}

//var butList = ["monBut", "tuesBut", "wedBut", "thursBut", "friBut"];
// monday's add button is clicked

// relevant code
document.addEventListener('DOMContentLoaded', function()
{

  var k;
  for (k = 0; k < boxList.length; k++)
  {
    checkIfPressed(boxList[k]);
  }

});

function checkIfPressed(dayBox) {
  var add = document.getElementById(dayBox);
  add.addEventListener('click', function()
  {
    console.log("this was pressed");
    console.log(add.id);
    updateCalendarArray(add.id);
  });

}


var calendarArray = [];

function updateCalendarArray(dayBox) {
  switch (dayBox) {
    case "monBox":
    calendarArray.push(0);
    console.log("added to calendarArray");
    console.log(calendarArray);
    break;
    case "tuesBox":
    calendarArray.push(1);
    break;
    case "wedBox":
    calendarArray.push(2);
    break;
    case "thursBox":
    calendarArray.push(3);
    break;
    case "friBox":
    calendarArray.push(4);
    break;
  }
  updateCalendar()
}

function updateCalendar() {
  for (var i = 0; i < calendarArray.length; i++) {
    document.getElementById(i).style.opacity = "1.0";
    switch (calendarArray[i]) {
      case 0:
      document.getElementById(i).style.color = "#9D7E79";
      break;
      case 1:
      document.getElementById(i).style.color = "#CCAC95";
      break;
      case 2:
      document.getElementById(i).style.color = "#9A947C";
      break;
      case 3:
      document.getElementById(i).style.color = "#748B83";
      break;
      case 4:
      document.getElementById(i).style.color = "#5B756C";
      break;
    }
  }


}






/*
document.getElementById("monInput").addEventListener("keydown", function(e)
{
if (!e)
{
var e = window.event;
}
if (e.keyCode == 13)
{
newElement("monInput", "monUL");
//document.getElementById("monBox").style.backgroundColor = "blue";
e.preventDefault();
}
}, false);

document.getElementById("tuesInput").addEventListener("keydown", function(e)
{
if (!e)
{
var e = window.event;
}
if (e.keyCode == 13)
{
newElement("tuesInput", "tuesUL");
//document.getElementById("monBox").style.backgroundColor = "blue";
e.preventDefault();
}
}, false);

document.getElementById("wedInput").addEventListener("keydown", function(e)
{
if (!e)
{
var e = window.event;
}
if (e.keyCode == 13)
{
newElement("wedInput", "wedUL");
//document.getElementById("monBox").style.backgroundColor = "blue";
e.preventDefault();
}
}, false);

document.getElementById("thursInput").addEventListener("keydown", function(e)
{
if (!e)
{
var e = window.event;
}
if (e.keyCode == 13)
{
newElement("thursInput", "thursUL");
//document.getElementById("monBox").style.backgroundColor = "blue";
e.preventDefault();
}
}, false);

document.getElementById("friInput").addEventListener("keydown", function(e)
{
if (!e)
{
var e = window.event;
}
if (e.keyCode == 13)
{
newElement("friInput", "friUL");
//document.getElementById("monBox").style.backgroundColor = "blue";
e.preventDefault();
}
}, false);
*/
var testArray;

var monArray;
var tuesArray;
var wedArray;
var thursArray;
var friArray;

// Create a new list item when clicking on the "Add" button or enter key
function newElement(theInput, theUL)
{
  var li = document.createElement("li");
  var inputValue = document.getElementById(theInput).value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue !== '')
  {
    document.getElementById(theUL).appendChild(li);
  }
  document.getElementById(theInput).value = "";
  /*
  if (document.getElementById(theUL).textContent === undefined) {
  testArray = [];
}*/
switch (theUL) {
  case "monUL":
  testArray = monArray;
  break;
  case "tuesUL":
  testArray = tuesArray;
  break;
  case "wedUL":
  testArray = wedArray;
  break;
  case "thursUL":
  testArray = thursArray;
  break;
  case "friUL":
  testArray = friArray;
  break;

}
//if (theUL === "monUL") { testArray = monArray;  }
//if (theUL === "tuesUL") { testArray = tuesArray; }
console.log(testArray);
if (testArray === undefined) {
  testArray = [];
}
console.log(theUL);
updateAdd(testArray, inputValue, theUL);

var span = document.createElement("SPAN");
var txt = document.createTextNode("\u00D7");
span.className = "close";
span.appendChild(txt);
li.appendChild(span);

for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
    var text = div.textContent;
    updateRemove(testArray, text.substring(0, text.length-1), theUL);

  }
}


}

function newElementfromStorage(theUL, inputValue) {
  var li = document.createElement("li");
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  document.getElementById(theUL).appendChild(li);

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  switch (theUL) {
    case "monUL":
    testArray = monArray;
    break;
    case "tuesUL":
    testArray = tuesArray;
    break;
    case "wedUL":
    testArray = wedArray;
    break;
    case "thursUL":
    testArray = thursArray;
    break;
    case "friUL":
    testArray = friArray;
    break;

  }

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
      //console.log(theUL);
      //console.log(testArray);
      var text = div.textContent;
      console.log("storage close");
      updateRemove(testArray, text.substring(0, text.length-1), theUL);

    }
  }

}


function reload(theUL, previousToDos) {
  console.log(theUL);
  var l;
  for (l = 0; l < previousToDos.length; l++) {
    newElementfromStorage(theUL, previousToDos[l]);
  }
}


/*
window.onload = loadToDos;

function loadToDos()
{
chrome.storage.sync.get("list", function(data)
{
testArray = data.list;
console.log("the storage loaded");
console.log(data.list);
reload("MonUL", data.list); //storing the storage value in a variable and passing to reload function
});

}
*/
