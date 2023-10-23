
const inputMin = prompt("Enter number of minutes:");
const inputMinutes = parseInt(inputMin);
let remainingSeconds = inputMinutes * 60;


 if(!isNaN(inputMinutes) & remainingSeconds >= 0 ){

    const myInterval = setInterval(myFunc, 1000);

    function myFunc() {
        let min = Math.floor(remainingSeconds / 60);
        let sec = remainingSeconds % 60;
        console.log(`${min}:${sec < 10 ? '0' : ''}${sec}`);
        remainingSeconds--;

        if (remainingSeconds < 0) {
            clearInterval(myInterval); // Stop the interval
            alert('Time is Up');
        }
    }

}else{
    console.log('invalid input');
  };



  
  
