'use strict';

var isAVowel = function(lttr){
  // your code goes here
  if(lttr == "a" || lttr == "e" || lttr == "i" || lttr == "u" || lttr == "o"){
    return true;
  }
  else{
    return false;
  }

};

module.exports = isAVowel;
