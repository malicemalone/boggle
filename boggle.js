var letters = []
var boggleDice = [
      "aaafrs",
      "aaeeee",
      "aafirs",
      "adennn",
      "aeeeem",
      "aeegmu",
      "aegmnn",
      "afirsy",
      "bjkqxz",
      "ccenst",
      "ceiilt",
      "ceilpt",
      "ceipst",
      "ddhnot",
      "dhhlor",
      "dhlnor",
      "dhlnor",
      "eiiitt",
      "emottt",
      "ensssu",
      "fiprsy",
      "gorrvw",
      "iprrry",
      "nootuw",
      "ooottu",
];

Array.prototype.shuffle = function() {
  var i = this.length, j, temp;
  if ( i == 0 ) return this;
  while ( --i ) {
     j = Math.floor( Math.random() * ( i + 1 ) );
     temp = this[i];
     this[i] = this[j];
     this[j] = temp;
  }
  return this;
}

function shake(dice) {
  letters = [];
  for(var i = 0; i < dice.length; i++) {
    if (dice[i][Math.floor(Math.random() * 6)] === "q") {
      letters.push("Qu");
    } else {
      letters.push(dice[i][Math.floor(Math.random() * 6)].toUpperCase());
    };
  };
};

function createBoard(lettersArray) {
  var boardString = "";
  var i = 0;
  while (i < lettersArray.length) {
    if (i % 5 === 0){
      boardString += "<tr class=\"row_" + (Math.floor(i/5) + 1).toString() + "\">"
    };
    boardString += "<td>" + lettersArray[i] + "</td>"
    if (i % 5 === 4){
      boardString += "</tr>"
    };
    i++
  };
  return boardString;
};



