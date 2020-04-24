function isCryptSolution(crypt, solution) {
  const solutionsObj = {};
  const newCrypt = [];
  let currentWord = '';
  solution.forEach(element => solutionsObj[element[0]] = element[1]);
  for (let index = 0; index < crypt.length; index++) {
    let word = crypt[index];
    for (let innerIndex = 0; innerIndex < word.length; innerIndex++) {
      // eslint-disable-next-line no-prototype-builtins
      if (solutionsObj.hasOwnProperty(word[innerIndex])) {
        currentWord += solutionsObj[word[innerIndex]];
      }
    }
    newCrypt.push(currentWord);
    currentWord = '';
  }

  if (newCrypt[0] !== '0' && newCrypt[0][0] === '0' || newCrypt[1] !== '0' && newCrypt[1][0] === '0') {
    return false;
  } else {
    const result = +(newCrypt[0]) + +(newCrypt[1]);
    if (result || result == 0) return true;
  }
  //index through each string in crypt
  //in each string, index through each character
  //check if solution object has this character as a property
  //replace if yes, return false if not
  //check for leading 0's once all characters have been replaced
  //change strings to numbers
  //do the math
  //return true or false

}

const crypt1 = ["SEND", "MORE", "MONEY"];
const solution1 = [
  ['O', '0'],
  ['M', '1'],
  ['Y', '2'],
  ['E', '5'],
  ['N', '6'],
  ['D', '7'],
  ['R', '8'],
  ['S', '9']
];

const crypt2 = ["TEN", "TWO", "ONE"];
const solution2 = [
  ['O', '1'],
  ['T', '0'],
  ['W', '9'],
  ['E', '5'],
  ['N', '4']
];

console.log(isCryptSolution(crypt2, solution2));
