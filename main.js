function capitalize(str) {
  return str.toUpperCase(); 
}

function exclaim(str1) {
  return str1 + "!";
}

function firstCharacter(str2) {
  return str2[0];
}

function lastCharacter(str3) {
  return str3[str3.length - 1];
}

function oneCharacter(str4, char) {
  return str4[char];
}

function twoCharacters(str5,char1,char2) {
  return str5[char1]+str5[char2];
}

function initials(str6, char1, char2) {
  let char1 = str6[0];
  let char2 = str6[str6.indexOf(' ') + 1];
  return char1 + '.' + char2 + '.';
}

function yeller(str7) {
  return exclaim(exclaim(exclaim(capitalize(str7))));
}


module.exports = {
  capitalize,
  exclaim,
  firstCharacter,
  lastCharacter,
  oneCharacter,
  twoCharacters,
  initials,
  yeller,
};