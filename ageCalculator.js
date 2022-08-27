const ageCalculator = function (name, yearOfBirth, currentYear) {
  const age = (currentYear - yearOfBirth);
  const howOld = (name + " is " + age + " years old.");
 
  howOld.toString();
  return howOld;
};

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));