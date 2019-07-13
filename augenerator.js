var input2 = document.getElementById("name2");
input2.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("button").click();
  }
});
var input3 = document.getElementById("name3");
input3.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("button").click();
  }
});

function storeVariable(){
  var person1 = document.getElementById("name1").value;
  var person2 = document.getElementById("name2").value;
  var person3 = document.getElementById("name3").value;
  var text;
  var twoPeople = person1 + " and " + person2;
  var threePeople = person1 + ", " + person2 + ", and " + person3;
  if (person3 == ""){
    var sentenceList = [twoPeople + " are the modern Bonnie and Clyde.",
    twoPeople + " have fan accounts dedicated to each other", twoPeople + " are set up on a blind date.",
    twoPeople + " are arranged to get married.", twoPeople + " constantly complain about the other to their friends, who ship them.",
    twoPeople + " are competitive angels trying to be the best in heaven.", twoPeople + " are competitive demons trying to be the best in hell.",
    twoPeople + " have been best friends since birth.", twoPeople + " are neighbors.",
    twoPeople + " are roommates.", twoPeople + " are locker neighbors.", twoPeople + " sit next to each other in class",
    twoPeople + " collaborate together for a Christmas song.", twoPeople + " share the same favorite musician.",
    twoPeople + " bond over their common hatred for a musician.", person1 + " hates " + person2 + " for no reason.",
    person2 + " likes it when " + person1 + " smiles.", person1 + " can read " + person2 + "'s thoughts.",
    person1 + " dies and " + person2 + " revives them back to life.", person2 + " dies and " + person1 + " is their grim reaper.",
    person1 + " escapes death and " + person2 + " is not happy.", person2 + " is employed by " + person1 + ".",
    person1 + " writes love letters to " + person2 + ".", person1 + " writes hate letters to " + person2 + ".",
    person2 + " writes a song for " + person1 + ".", person1 + " is " + person2 + "'s ghost writer.",
    person2 + " thinks " + person1 + " has a terrible music taste.", person1 + " thinks " + person2 + " has an amazing music taste.",
    person1 + " kinkshames " + person2 + ".", person1 + " disappears and " + person2 + " has to find them.",
    person2 + " teaches " + person1 + " how to code.", twoPeople + " have mutual friends.",
    twoPeople + " have mutual enemies.", person1 + "'s kingdom declares war on " + person2 + "'s kingdom.",
    twoPeople + " are exiled from their country.", twoPeople + " are stuck on a deserted island together."];
  } else {
    var sentenceList = [threePeople + " rob a bank together.", twoPeople + " are partners in crime and " + person3 + " is the cop chasing them.",
    threePeople + " have fan accounts dedicated to each other", twoPeople + " are set up on a blind date by " + person3 + ".",
    twoPeople + " are arranged to get married but " + person3 + " is dating " + person2 + ".",
    twoPeople + " constantly complain about the other to " + person3 + ", who ships them.",
    twoPeople + " make a bet to see who can win over " + person3 + "'s heart first.",
    threePeople + " have been best friends since birth.", threePeople + " are neighbors.",
    threePeople + " are roommates.", threePeople + " are locker neighbors.", threePeople + " sit next to each other in class",
    threePeople + " collaborate together for a Christmas song.", threePeople + " share the same favorite musician.",
    threePeople + " bond over their common hatred for a musician.", person1 + " and " + person3 + " hate " + person2 + " for no reason.",
    person2 + " likes it when " + person1 + " smiles around " + person3 + ".",
    person3 + " can read " + twoPeople + "'s thoughts (and they like each other).",
    person1 + " dies and " + person2 + " revives them back to life because " + person3 + " was grieving.",
    person3 + " escapes death and " + twoPeople + " are not happy.", person2 + " is employed by " + person1 + " thanks to " + person3 + ".",
    person1 + " writes love letters to " + person2 + " who thinks they're from " + person3 + ".",
    person1 + " writes hate letters to " + person2 + " who thinks they're from " + person3 + ".",
    person3 + " helps " + person2 + " write a song for " + person1 + ".", person3 + " thinks " + twoPeople + " have terrible music taste.",
    person1 + " kinkshames " + person2 + ".", person1 + " disappears and " + person2 + " has to find them.",
    threePeople + " take turns pair programming.", threePeople + " all have mutual friends.",
    threePeople + " all have mutual enemies.", threePeople + "'s kingdoms go to war with each other.",
    threePeople + " are exiled from their country.", threePeople + " are stuck on a deserted island together."];
  }
  console.log(sentenceList.length);
  var number = Math.floor(Math.random() * sentenceList.length);
  text = sentenceList[number];
  var scenarioSection;
  var scenarioText;
  scenarioSection = document.createElement("P");
  scenarioText = document.createTextNode(text);
  scenarioSection.appendChild(scenarioText);
  document.getElementById("result").appendChild(scenarioSection);
}
