// 1. Square

// *****
// *****
// *****
// *****
// *****

const square = Array(5).fill('');

  square.forEach((_,i) => {
    const row = Array(5).fill('*').join('');
    console.log(row);
  });

2. Empty Square

*****
*   *
*   *
*   *
*****

const emptySquare = (size) => {
	Array(size).fill("").forEach((_,index) => {
 	 const lines = (index === 0 || index === numRows - 1) ?
	 Array(size).fill("*").join("") : "*" + Array(size - 2).fill(" ").join("") + "*";

  console.log(lines);
});	
}; 
emptySquare(5);

// 3. Triangle 1

//     *
//    **
//   ***
//  ****
// *****

const numRows = 5;

Array(numRows).fill().forEach((_, i) => {
  const stars = Array(i + 1).fill('*').join('');

  const space = Array(numRows - i - 1).fill(' ').join('');

  console.log(space + stars);
});

4. Triangle 2

*****
 ****
  ***
   **
    *

const triangle-2 = (size) => {

  Array(size).fill().forEach((_, i) => {
  const stars = Array(size - i).fill('*');
  const space = Array(i).fill(' ');
  console.log(space.join('') + stars.join(''));
});	
}; 
triangle-2(5);

// 14. Reverse Empty Pyramid

// *********
//  *     *
//   *   *
//    * *
//     *
  
const numRows = 5; 
const output = Array(numRows).fill("");
 
output.forEach((_, rowIndex) => {
  const spaces = Array(rowIndex).fill(" ").join("");
   
  const stars = (rowIndex === 0 || rowIndex === numRows - 1) ?
    Array(2 * (numRows - rowIndex) - 1).fill("*").join("") :
    "*" + Array(2 * (numRows - rowIndex - 1) - 1).fill(" ").join("") + "*";

  const row = spaces + stars + spaces; 
  console.log(row);
});

// 15. Heart

//  ***   ***
// ***** *****
// ***********
//  *********
//   *******
//    *****
//     ***
//      *

const numRows = 8;
Array(numRows).fill().forEach((_, i) => {
 if (i===0) {
  const stars= Array((2*i) + 3).fill('*').join('');
  const row= ' ' + stars + '   ' + stars + ' '; 
   console.log(row);
 } else if (i===1){
   const stars= Array((2*i) + 3).fill('*').join('');
  const row= stars + ' ' + stars ; 
   console.log(row);
 } else {
   const spaces= Array(i - 2).fill(' ').join('');
  const stars= Array(((2*i) + 7) - ((4*i) - 8)).fill('*').join('');
  const row = spaces + stars + spaces;
   console.log(row);
 }
});


// 22. Alphabet Diamond

//     A
//    ABC
//   ABCDE
//  ABCDEFG
// ABCDEFGHI
//  ABCDEFG
//   ABCDE
//    ABC
//     A

const numRows = 5;
const alphabet = 'ABCDEFGHI';

Array(numRows).fill().forEach((_, i) => {
  const spaces= Array(numRows - i).fill(' ').join('')
  const characters= Array(2 * i + 1).fill().map((_, j) => { return alphabet[j] }).join('')
  const row = spaces + characters + spaces;
  console.log(row);
 
});
{
const numRows = 4;
const alphabet = 'ABCDEFG';
const length= alphabet.length;
Array(numRows).fill().forEach((_, i) => {
   const spaces= Array(numRows - 2 + i).fill(' ').join('')
   const characters=  Array(length - 2 * i).fill().map((_, j) =>{ return alphabet[j]}).join('')
   const rowreverse = spaces + characters + spaces;
   console.log(rowreverse);
});
}

