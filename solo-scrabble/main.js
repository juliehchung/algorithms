function scoreWords(words) {
  const map = { A: 1, B: 3, C: 3, D: 2, E: 1, F: 4, G: 2, H: 4, I: 1, J: 8, K: 5, L: 2, M: 3, N: 1, O: 1, P: 3, Q: 10, R: 1, S: 1, T: 1, U: 1, V: 4, W: 4, X: 8, Y: 4, Z: 10 };
  const winners = [words[0]];
  const wordVals = {};
  words.forEach(word => {
    let points = 0;
    for (let index = 0; index < word.length; index++) {
      const char = word[index];
      points += map[char];
    }
      wordVals[word] = points;
  });
  words.forEach((word, index) => {
    if (wordVals[word] > wordVals[winners[0]]) {
      winners.splice(0, winners.length, word);
    } else if (wordVals[word] === wordVals[winners[0]]) {
      if (winners.includes(word) && index !== 0) {  // handles multiple of the same word
        winners.push(word);
      } else if (!winners.includes(word)) {
        winners.push(word);
      }
    }
  });
  return winners;
}
