'use strict';

function words(stringi){
  var array = stringi.split(" ");
  var counts = {};
  for(var i = 0; i< array.length; i++) 
  {
    var num = array[i];
    if (counts[num]===undefined){
      counts[num] = 1;
    }else{counts[num] += 1;}
 //   counts[num] = counts[num] ? counts[num]+1 : 1;
  }
  return counts;
}

module.exports = words;