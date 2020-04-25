const convert = function (str, numRows) {
  const result = Array(numRows).fill('');
  let row = 0;
  let zigzag = false;
  for (let index = 0; index < str.length; index++) {
      result[row] += str[index];
      row++;
    if (row === numRows - 1 || row === 0) {
      zigzag = !zigzag;
    }
  }

  console.log(result);
};

const s1 = "PAYPALISHIRING";
const numRows1 = 3;

const s2 = "PAYPALISHIRING";
const numRows2 = 4;

console.log(convert(s1, numRows1));
