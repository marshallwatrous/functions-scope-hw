// 1. 1. A parameter is a word that goes inside the parentheses of a function you are creating.  When you call the function, it uses the values of the parameters to carry out the function.  An argument is a word you put in parentheses after the function's name when the function is called outside of the function.
//2.  A console.log writes something to the console but a return doesn't.  It stores a value in the console.
//3. A return stores an value as a given output to the console.

//2.
function checkPalindrome(string) {
    const lowercaseString = string.toLowerCase();
    const reversedString = lowercaseString.split("").reverse().join("");
    console.log(reversedString);
    if (lowercaseString === reversedString) {
        return true;
    }   else {
            return false;
        }
    
}

const wordIsPalindrome = checkPalindrome("Radar");
console.log(wordIsPalindrome);

// 3.

const studentList = ["Marshall", "David", "Harry", "Daniel"];
const checkStudent = "Harry";

function checkForStudent(students, name) {
    for (let i = 0; i < students.length; i++) {
        if (students[i] == name) {
            return true;
        }
    }
    return false;
}
console.log(checkForStudent(studentList, checkStudent));

// #4

let sum = 0;
const numberList = [1,2,3,4];

function sumArray(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i];
    }
}

sumArray(numberList);
console.log(sum);