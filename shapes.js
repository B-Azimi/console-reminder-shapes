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

// 2. Empty Square

// *****
// *   *
// *   *
// *   *
// *****

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

const triangle_1 = (size) => {

  Array(size).fill().forEach((_, i) => {
  const stars = Array(i + 1).fill('*').join('');
  const space = Array(numRows - i - 1).fill(' ').join('');
  console.log(space + stars);
});	
}; 
triangle_1(5);

// 4. Triangle 2

// *****
//  ****
//   ***
//    **
//     *

const triangle_2 = (size) => {

  Array(size).fill().forEach((_, i) => {
  const stars = Array(size - i).fill('*');
  const space = Array(i).fill(' ');
  console.log(space.join('') + stars.join(''));
});	
}; 
triangle_2(5);

// 11. Pyramid

//     *
//    ***
//   *****
//  *******
// *********


const pyramid_1 = (size) => {

    Array(size).fill().forEach((_, i) => {
    const stars = Array(2*i + 1).fill('*');
    const space = Array(size - (i + 1)).fill(' ');
    console.log(space.join('') + stars.join('') + space.join(''));
  });	
  }; 
  pyramid_1(5);

// 12. Reverse Pyramid

// *********
//  *******
//   *****
//    ***
//     *


const pyramid_1 = (size) => {

    Array(size).fill().forEach((_, i) => {
    const stars = Array(2*i + 1).fill('*');
    const space = Array(size - (i + 1)).fill(' ');
    console.log(space.join('') + stars.join('') + space.join(''));
  });	
  }; 
  pyramid_1(5);


// 14. Reverse Empty Pyramid

// *********
//  *     *
//   *   *
//    * *
//     *

const Reverse_Empty_Pyramid = (size) => {
Array(size).fill("").forEach((_, rowIndex) => {
  const spaces = Array(rowIndex).fill(" ").join("");   
  const stars = (rowIndex === 0 || rowIndex === size - 1) ?
    Array(2 * (size - rowIndex) - 1).fill("*").join("") :
    "*" + Array(2 * (size - rowIndex - 1) - 1).fill(" ").join("") + "*";
  const row = spaces + stars + spaces; 
  console.log(row);
});
  	
  }; 
 
Reverse_Empty_Pyramid(5);



// 15. Heart

//  ***   ***
// ***** *****
// ***********
//  *********
//   *******
//    *****
//     ***
//      *

const Heart = (size) => {
Array(size).fill().forEach((_, i) => {
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
  	
  }; 
 
Heart(8);




// 16. Alphabet Triangle 1

// A
// A B
// A B C
// A B C D
// A B C D E

const Alphabet_Triangle_1 = (size) => {
	const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O'];

	Array(size).fill().forEach((_, i) => {
  	const row = Array(i + 1).fill().map((_, j) => alphabet[j]).join(' ');
  	console.log(row);
 
	});
  }; 
  Alphabet_Triangle_1(5);


// 17. Alphabet Triangle 2

// A
// B B
// C C C
// D D D D
// E E E E E

const Alphabet_Triangle_2 = (size) => {
	const alphabet =  ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O'];

	Array(size).fill().forEach((_, i) => {
  	const row = Array(i + 1).fill().map((_, j) => alphabet[i]).join(' ');
  	console.log(row);
 
});
  }; 
  Alphabet_Triangle_2(5);

// 18. Alphabet Triangle 3

// A
// B C
// D E F
// G H I J
// K L M N O

const Alphabet_Triangle_3 = (size) => {
	let alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O'];

	Array(size).fill().forEach((_, i) => {
  	const row = Array(i + 1).fill().map((_, j) => alphabet[j]).join(' ');
      alphabet.shift();
    console.log(row);
   
});
  }; 
  Alphabet_Triangle_3(5);

// 19. Alphabet Triangle 4

// ABCDE
// ABCD
// ABC
// AB
// A

const Alphabet_Triangle_4 = (size) => {
	const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O'];

	Array(size).fill().forEach((_, i) => {
  	const row = Array(size - i).fill().map((_, j) => alphabet[j]).join('');
  	console.log(row);
 
	});
  }; 
  Alphabet_Triangle_4(5);

// 20. Alphabet Triangle 5

// EDCBA
// EDCB
// EDC
// ED
// E

const Alphabet_Triangle_5 = (size) => {
	const alphabet =  ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O'];


	Array(size).fill().forEach((_, i) => {
  	const row = Array(size - i).fill().map((_, j) => alphabet[j]).reverse().join('');
  	alphabet.shift(),
    console.log(row);
 
	});
  }; 
  Alphabet_Triangle_5(5);

// 21. Alphabet Triangle 6

// EDCBA
// DCBA
// CBA
// BA
// A

const Alphabet_Triangle_6 = (size) => {
    let alphabet =   ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O'];

	Array(size).fill().forEach((_, i) => {
  	const row = Array(size - i).fill().map((_, j) => alphabet[j]).reverse().join('');
   	 console.log(row);
 
	});
  }; 
  Alphabet_Triangle_6(5);

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

const Alphabet_Diamond = (size) => {
	
    Array(size).fill().forEach((_, i) => {
        const alphabet =  ['A','B','C','D','E','F','G','H','I'];
        if (i< 5) {
            let space= Array(4 - i).fill(' ').join('');
            let character= Array(2 * i + 1).fill().map((_, j) => alphabet[j]).join('')
            const row = space + character + space ;
            console.log(row);
        } else{
           let index = i - 4;
            let space =Array(index).fill(' ').join('');
            let character = Array(size - (2* index)).fill().map((_, j) => alphabet[j]).join('');
             const rowRevers = space + character + space ;
             console.log(rowRevers);
        }
      });

  }; 
  Alphabet_Diamond(9);

// 23. Alphabet Hour Glass

// ABCDEFGHI
//  ABCDEFG
//   ABCDE
//    ABC
//     A
//    ABC
//   ABCDE
//  ABCDEFG
// ABCDEFGHI

const Alphabet_Hour_Glass = (size) => {
	
    Array(size).fill().forEach((_, i) => {
        const alphabet =  ['A','B','C','D','E','F','G','H','I'];
        if (i< 5) {
            let space =Array(i).fill(' ').join('');
            let character = Array(size - (2* i)).fill().map((_, j) => alphabet[j]).join('');
            const row = space + character + space ;
            console.log(row);
        } else{
           let index = i - 5;
           let space= Array(3 - index).fill(' ').join('');
           let character= Array(2*index+3).fill().map((_, j) => alphabet[j]).join('')
             const rowRevers = space + character + space ;
             console.log(rowRevers);
        }
      });

  }; 
  Alphabet_Hour_Glass(9);


