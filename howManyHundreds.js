const howManyHundreds = function (num) {
  const totalMaple = num;
  
  const trimExtra = (totalMaple % 100); 
  const trimmed = totalMaple - trimExtra;
  const containers = trimmed / 100;

  return containers;
};

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);