
// Exercise 10
// Ask the user for 3 cards. If the sum equals 21 print BLACKJACK! If the sum is greater than 21 print BUST!
// If the sum is less than 21 print “The total is [TOTAL]”
var card1 = parseInt(prompt("please enter 1st number of card"));
var card2 = parseInt(prompt("please enter 2nd number of card"));
var card3 = parseInt(prompt("please enter 3rd number of card"));
var total = card1 + card2 + card3;

if (total <= 21) {
    alert("The total is: " + total);
} else if (total >= 21) {
    alert("BUST!");
}

// Exercise 11
// Ask the user to enter their grade. Print their letter grade:
//
//     A 90 - 100 B 80 - 89 C 70 - 79 D 60 - 69 F 0 - 59
//
// Extra Credit:
//     If it's negative or over 100 print an error.
var user1 = parseInt(prompt("Please enter your grade to decide your fate bwhahahahaha"));

if (user1 <= 100 && user1 >=90) {
    alert("A");
} else if (user1 <= 89 && user1 >= 80) {
    alert("B");
} else if (user1 <= 79 && user1 >= 70) {
    alert("C");
} else if (user1 <= 69 && user1 >= 60) {
    alert("D");
} else if (user1 < 0) {
    alert("Error!");
} else if (user1 > 100) {
    alert("Error");
} else {
    alert("F");
}


// Exercise 12
// Ask the user to enter their age. Check if they entered a value between 0 and 125. If valid, print "REAL AGE".
// If invalid print “NOT A REAL AGE!!!”
var user2 = parseInt(prompt("Please enter your age"));

if (user2 >= 0 && user2 <= 125) {
    alert("REAL AGE");
} else {
    alert("NOT A REAL AGE");
}



// do you come here often :P