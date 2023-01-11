//typewriter animation
// set up text to print, each item in array is new line


var aText = new Array(
"Musa Akyüz", 
"Jr. Cyber Analyst"
);


var iSpeed = 140; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines
 
 
 
var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row

 
 
 
function typewriter()
{
 sContents =  ' ';
 iRow = Math.max(0, iIndex-iScrollAt);
 var destination = document.getElementById("typedtext");
 //var destination2 = document.getElementById("typedtext2");
 //var destination3 = document.getElementById("typedtext3");
 
 while ( iRow < iIndex ) {
  sContents += musa[iRow++] + '<br>';
 }
 destination.innerHTML = sContents + musa[iIndex].substring(0, iTextPos) + "_";
 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != musa.length ) {
   iArrLength = musa[iIndex].length;
   setTimeout("typewriter()", 700);
  }
 } else {
  setTimeout("typewriter()", iSpeed);
 } 
}


typewriter(aText);


