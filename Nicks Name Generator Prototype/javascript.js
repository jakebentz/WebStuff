var newFirst = [
  'hotdog',
  'appendage',
  'whale',
  'burp',
  'thing',
  'moof',
  'waste',
  'dill'
]

var newLast = [
  'eater',
  'drinker',
  'gulper',
  'chugger',
  'masher',
  'milker',
  'crusher',
  'dunker'
]

function newName() {
  var randomNumber1 = Math.floor(Math.random() * (newFirst.length));
  var randomNumber2 = Math.floor(Math.random() * (newLast.length));
  //document.getElementById('oldName').innerHTML = fname.value+ " "+ lname.value;
//  var randomNumber1 = Math.floor(Math.random() * (newFirst.length));
//  var randomNumber2 = Math.floor(Math.random() * (newLast.length));
  document.getElementById('oldName').innerHTML = "oldname: "+fname.value+" "+lname.value;
  document.getElementById('nameDisplay').innerHTML = "newname:" +newFirst[randomNumber1]+" "+newLast[randomNumber2];
}
