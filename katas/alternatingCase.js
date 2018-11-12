/*
  alternatingCase should take a string and return a string.
  Every other letter either capital or lower case, starting with a capital letter.
  E.g 'hello' would become 'HeLlO'
  'hello world' would become 'HeLlO wOrLd'
*/



function alternatingCase(str) {
  let alternateCaseArray = [];
  for (charCount = 0; charCount < str.length; charCount++) {
    if (charCount % 2 !== 0) {
    alternateCaseArray.push(str.charAt(charCount));
    } else {
      alternateCaseArray.push(str.charAt(charCount).toUpperCase());
    }}
  return alternateCaseArray.join('');
}

console.log(alternatingCase('abc123'));

module.exports = alternatingCase;
