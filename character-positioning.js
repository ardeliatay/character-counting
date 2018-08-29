function char_posi(sentence) {
  var sentenceNoSpace = sentence.split(' ').join('');
  var sentence_lengths = {};
  for (var i = 0; i < sentenceNoSpace.length; i++) {
    var character = sentenceNoSpace[i];
    if (sentence_lengths[character] !== undefined ) {
      sentence_lengths[character].push(i);
    } else {
      sentence_lengths[character] = [i];
    }
  }
  return sentence_lengths;
}
console.log(char_posi("lighthouse in the house"));
