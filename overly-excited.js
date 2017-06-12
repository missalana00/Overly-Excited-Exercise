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





// Step 1:

// Create an array that contains the letters of the alphabet, then send
// it to the console so that it prints out.

var sentence = ["Josie's", "on", "a", "vacation", "far", "away", "come", "around", "and", "talk", "it", "over" ];
console.log(sentence);

 // Step 2:

// The stackSong function should accept the array as the sole argument -
// function stackSong (theSongArray) {

      // Write a `for` loop that iterates over the array argument and
     //  outputs the letters so that they stack like this:

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
    output += sentence[i]; /* Understand that += gives you where you're at currently and where you were. */
    console.log(output);
  }
}

stackSong(); /* Here, you are calling the function you created. */
