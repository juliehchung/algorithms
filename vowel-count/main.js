function countVowels(str) {
  let count = 0;
  str.toLowerCase().split('').forEach(letter => {
    if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') count++;
  });
  return count;
}

// const str = "supercalifragilisticexpialidocious"; // 16
// const str = 'aeiouy'; // 5
const str = 'nschthng' // 0

console.log(countVowels(str));
