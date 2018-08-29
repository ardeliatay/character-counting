function countLetters(sentence) {
  var sentenceNoSpace = sentence.split(' ').join('');
  var sentenceLengths = {};
  for (var i = 0; i < sentenceNoSpace.length; i++){
    value = sentenceNoSpace[i];
    if(value in sentenceLengths) {
      sentenceLengths[value]++;
    } else {
      sentenceLengths[value] = 1;
    }
}
return sentenceLengths;
}

console.log(countLetters("lighthouse in the house"))



