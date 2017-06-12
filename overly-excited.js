// // Create an array that contains the words in the sentence
// var sentence = ["Josie's", "on", "a", "vacation", "far", "away", "come", "around", "and", "talk", "it", "over" ];

// // The addExcitement function should accept the array as the sole argument


// function stackSong (monkeybum) {

// 	for (var i = 0; i < sentence.length; i++) 
    
//     console.log("monkeybum", monkeybum);

//     /*
//       Write a `for` loop that iterates over the array argument and
//       outputs the words.
//      */
// };

// // Invoke the function and pass in the array
// stackSong(sentence)


// I USED THE ALPHA STACKER EXERCISE TO HELP ME WITH THIS EXERCISE, which is why you see directions 
// about letters below...


// Step 1:

// Create an array that contains the words of your song, then send
// it to the console so that it prints out.

var sentence = ["Josie's", "on", "a", "vacation", "far", "away", "come", "around", "and", "talk", "it", "over" ];
console.log(sentence);

 // Step 2:

// The stackSong function should accept the array as the sole argument -
// function stackSong (theSongArray) {

      // Write a `for` loop that iterates over the array argument and
     //  outputs the words so that they stack like this:

 //       a
 //       ab
 //       abc
 //       abcd
 //       abcde
 //       abcdef
 //       abcdefg

// }

function stackSong () {

var output = ' ';  /* Note: You have to declare var before filling it. You also need to give it
an empty string as a place holder. */

for (var i = 0; i < sentence.length; i++ ) {
    output += sentence[i] + " "; /* Understand that += gives you where you're at currently and where you were. */
    console.log(output);
  }
}

// stackSong(); /* Here, you are calling the function you created. */




// Step 3:

// Now, add logic to stackSong that places a (!) after every third word.
// This will require you to do some basic math in JavaScript, and use an if statement.
// Your job is to read the following English statement and write
// the equivalent in JavaSript code to make it work:

// If the current value of the counter variable can be
// evenly divided by 3 - using the JavaScript remainder operator - then add a single (!) to the output.


function stackSong () {

var output = ' ';

for (var i = 0; i < sentence.length; i++ ) {
    if (i % 3 === 0) {
    output = output + " " + sentence[i] + '!';
    console.log(output);
    }

else {
    output = output + sentence[i];
    console.log(output);
   }
 }
}

stackSong();
