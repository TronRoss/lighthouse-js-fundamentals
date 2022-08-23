//Define variable "school" and function "whichSchool".
const whichSchool  = function (age) {
if (age < 13) {
  school = "Elementary school" 
    return school;
} else if (age > 13 && age < 18) {
  school = "Secondary school"
    return school;
} else {
  school = "Lighthouse Labs"
    return school;
}
};

// Call function and print questions and answers.

console.log("I am 35. Which school should I go to?");
console.log(whichSchool(35));
console.log("I am 8. Which school should I go to?");
console.log(whichSchool(8));
console.log("I am 14. Which school should I go to?");
console.log(whichSchool(14));