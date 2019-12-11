var element = document.getElementById("sidebar");
var h4 = document.createElement("h4");
var hOne = document.createTextNode("Contents");
h4.appendChild(hOne);
element.appendChild(h4);

/* Create Elements */
var a1 = document.createElement("a");
var a2 = document.createElement("a");
var a3 = document.createElement("a");
var a4 = document.createElement("a");
var a5 = document.createElement("a");
var a6 = document.createElement("a");
var a7 = document.createElement("a");
var a8 = document.createElement("a");
var a9 = document.createElement("a");
var a10 = document.createElement("a");
var a11 = document.createElement("a");
var a12 = document.createElement("a");
var a13 = document.createElement("a");
var a14 = document.createElement("a");

/* Add Text */
var aOne = document.createTextNode("Introduction");
var aTwo = document.createTextNode("Rules");
var aThree = document.createTextNode("Movement / Mechanics");
var aFour = document.createTextNode("King Golem");
var aFive = document.createTextNode("Meta Knight");
var aSix = document.createTextNode("Moley");
var aSeven = document.createTextNode("Mega Titan");
var aEight = document.createTextNode("Gobbler");
var aNine = document.createTextNode("Master & Crazy Hands");
var aTen = document.createTextNode("Kracko");
var aEleven = document.createTextNode("Wiz");
var aTwelve = document.createTextNode("Dark Mind I-III");
var aThirteen = document.createTextNode("Dark Mind IV-VI");
var aFourteen = document.createTextNode("External Resources");

/* Add Links */
var att1 = document.createAttribute("href");
att1.value = "intro.html";
a1.setAttributeNode(att1);

var att2 = document.createAttribute("href");
att2.value = "rules.html";
a2.setAttributeNode(att2);

var att3 = document.createAttribute("href");
att3.value = "movement.html";
a3.setAttributeNode(att3);

var att4 = document.createAttribute("href");
att4.value = "1.html";
a4.setAttributeNode(att4);

var att5 = document.createAttribute("href");
att5.value = "2.html";
a5.setAttributeNode(att5);

var att6 = document.createAttribute("href");
att6.value = "3.html";
a6.setAttributeNode(att6);

var att7 = document.createAttribute("href");
att7.value = "4.html";
a7.setAttributeNode(att7);

var att8 = document.createAttribute("href");
att8.value = "5.html";
a8.setAttributeNode(att8);

var att9 = document.createAttribute("href");
att9.value = "6.html";
a9.setAttributeNode(att9);

var att10 = document.createAttribute("href");
att10.value = "7.html";
a10.setAttributeNode(att10);

var att11 = document.createAttribute("href");
att11.value = "8.html";
a11.setAttributeNode(att11);

var att12 = document.createAttribute("href");
att12.value = "9.html";
a12.setAttributeNode(att12);

var att13 = document.createAttribute("href");
att13.value = "10.html";
a13.setAttributeNode(att13);

var att14 = document.createAttribute("href");
att14.value = "resources.html";
a14.setAttributeNode(att14);


/* Append Childs */
a1.appendChild(aOne);
a2.appendChild(aTwo);
a3.appendChild(aThree);
a4.appendChild(aFour);
a5.appendChild(aFive);
a6.appendChild(aSix);
a7.appendChild(aSeven);
a8.appendChild(aEight);
a9.appendChild(aNine);
a10.appendChild(aTen);
a11.appendChild(aEleven);
a12.appendChild(aTwelve);
a13.appendChild(aThirteen);
a14.appendChild(aFourteen);

element.appendChild(a1);
element.appendChild(a2);
element.appendChild(a3);
element.appendChild(a4);
element.appendChild(a5);
element.appendChild(a6);
element.appendChild(a7);
element.appendChild(a8);
element.appendChild(a9);
element.appendChild(a10);
element.appendChild(a11);
element.appendChild(a12);
element.appendChild(a13);
element.appendChild(a14);