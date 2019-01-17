var maleSeriousDodarms = [
  'eater',
  'drinker',
  'gulper',
  'chugger',
  'masher',
  'milker',
  'crusher',
  'dunker'
]

var maleSillyDodarms = [
  'hotdog',
  'appendage',
  'whale',
  'burp',
  'thing',
  'moof',
  'waste',
  'dill'
]

var femaleSeriousDodarms = [
  'eater',
  'drinker',
  'gulper',
  'chugger',
  'masher',
  'milker',
  'crusher',
  'dunker'
]

var femaleSillyDodarms = [
  'hotdog',
  'appendage',
  'whale',
  'burp',
  'thing',
  'moof',
  'waste',
  'dill'
]

var maleSeriousWarensemble = [
  'eater',
  'drinker',
  'gulper',
  'chugger',
  'masher',
  'milker',
  'crusher',
  'dunker'
]

var maleSillyWarensemble = [
  'hotdog',
  'appendage',
  'whale',
  'burp',
  'thing',
  'moof',
  'waste',
  'dill'
]

var femaleSeriousWarensemble = [
  'eater',
  'drinker',
  'gulper',
  'chugger',
  'masher',
  'milker',
  'crusher',
  'dunker'
]

var femaleSillyWarensemble = [
  'hotdog',
  'appendage',
  'whale',
  'burp',
  'thing',
  'moof',
  'waste',
  'dill'
]

var maleSeriousCandle = [
  'eater',
  'drinker',
  'gulper',
  'chugger',
  'masher',
  'milker',
  'crusher',
  'dunker'
]

var maleSillyCandle = [
  'hotdog',
  'appendage',
  'whale',
  'burp',
  'thing',
  'moof',
  'waste',
  'dill'
]

var femaleSeriousCandle = [
  'eater',
  'drinker',
  'gulper',
  'chugger',
  'masher',
  'milker',
  'crusher',
  'dunker'
]

var femaleSillyCandle = [
  'hotdog',
  'appendage',
  'whale',
  'burp',
  'thing',
  'moof',
  'waste',
  'dill'
]

var maleSeriousMilk = [
  'eater',
  'drinker',
  'gulper',
  'chugger',
  'masher',
  'milker',
  'crusher',
  'dunker'
]

var maleSillyMilk = [
  'hotdog',
  'appendage',
  'whale',
  'burp',
  'thing',
  'moof',
  'waste',
  'dill'
]

var femaleSeriousMilk = [
  'eater',
  'drinker',
  'gulper',
  'chugger',
  'masher',
  'milker',
  'crusher',
  'dunker'
]

var femaleSillyMilk = [
  'hotdog',
  'appendage',
  'whale',
  'burp',
  'thing',
  'moof',
  'waste',
  'dill'
]

function newName() {
var newName = maleSillyDodarms;
var vGender = document.getElementById('gender').value;
var vFloor = document.getElementById('floor').value;
var vFaction = document.getElementById('faction').value;
var vTone = document.getElementById('tone').value;
var numGender = document.getElementById('gender').value.length;
var numFloor = document.getElementById('floor').value.length;
var numFaction = document.getElementById('faction').value.length;
var numTone = document.getElementById('tone').value.length;
var result = "maleSeriousDodarms";
var customNumber = 1

//determine gender, tone, and faction
//maleSerious
if(vGender == "male" && vTone == "serious"){
  if(vFaction == "dodarms"){
    result = "maleSeriousDodarms"
  } else {
    if(vFaction == "warensemble"){
      result = "maleSeriousWarensemble"
    } else {
      if(vFaction == "candle"){
        result = "maleSeriousCandle"
      } else {
        if(vFaction == "milk"){
          result = "maleSeriousMilk"
        }
      }
    }
  }
}
//femaleSerious
if(vGender == "female" && vTone == "serious"){
  if(vFaction == "dodarms"){
    result = "femaleSeriousDodarms"
  } else {
    if(vFaction == "warensemble"){
      result = "femaleSeriousWarensemble"
    } else {
      if(vFaction == "candle"){
        result = "femaleSeriousCandle"
      } else {
        if(vFaction == "milk"){
          result = "femaleSeriousMilk"
        }
      }
    }
  }
}
//maleSilly
if(vGender == "male" && vTone == "silly"){
  if(vFaction == "dodarms"){
    result = "maleSillyDodarms"
  } else {
    if(vFaction == "warensemble"){
      result = "maleSillyWarensemble"
    } else {
      if(vFaction == "candle"){
        result = "maleSillyCandle"
      } else {
        if(vFaction == "milk"){
          result = "maleSillyMilk"
        }
      }
    }
  }
}
//femaleSilly
if(vGender == "female" && vTone == "silly"){
  if(vFaction == "dodarms"){
    result = "femaleSillyDodarms"
  } else {
    if(vFaction == "warensemble"){
      result = "femaleSillyWarensemble"
    } else {
      if(vFaction == "candle"){
        result = "femaleSillyCandle"
      } else {
        if(vFaction == "milk"){
          result = "femaleSillyMilk"
        }
      }
    }
  }
}

//Determine number
number = numTone+numFloor+numGender+numFloor+numFaction

//  var randomNumber1 = Math.floor(Math.random() * (newFirst.length));
//  var randomNumber2 = Math.floor(Math.random() * (newLast.length));
//  document.getElementById('oldName').innerHTML = "oldname: "+fname.value+" "+lname.value;
//  document.getElementById('nameDisplay').innerHTML = "newname:" +newFirst[randomNumber1]+" "+newLast[randomNumber2];
  document.getElementById('choices').innerHTML = "Choices: "+vGender+" "+vFloor+" "+vFaction+" "+vTone;
//  document.getElementById('choices').innerHTML = "Variables: "+vGender+" "+vFloor" "+vFaction+" "+vTone;
  document.getElementById('nameDisplay').innerHTML = "Avatar Name:" +newName[customNumber];
  document.getElementById('result').innerHTML = "Result: " + result + " Number: "+number;
  //
}
