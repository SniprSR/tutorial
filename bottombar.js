var element = document.getElementById("sidebar");
var br1 = document.createElement("br");
var br2 = document.createElement("br");
var h4 = document.createElement("h4");
var a1 = document.createElement("a");
var a2 = document.createElement("a");

var hOne = document.createTextNode("Tutorials");
var aOne = document.createTextNode("Katam Any%");
var aTwo = document.createTextNode("Blog CCS");


var att1 = document.createAttribute("href");
att1.value = "../katam/intro.html";
a1.setAttributeNode(att1);
var att2 = document.createAttribute("href");
att2.value = "../blog/intro.html";
a2.setAttributeNode(att2);


h4.appendChild(hOne);
a1.appendChild(aOne);
a2.appendChild(aTwo);

element.appendChild(br1);
element.appendChild(br2);
element.appendChild(h4);
element.appendChild(a1);
element.appendChild(a2);