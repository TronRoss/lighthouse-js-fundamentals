const calculateRectangleArea = function (length, width) {
  if (length > 0 && width > 0) {
    const rectangleArea = (length * width);
    return rectangleArea;
  }   
};

console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

const calculateTriangleArea = function (base, height) {
  if (base > 0 && height > 0) {
    const triangleArea = ((base * height) / 2);
    return triangleArea;
  }
};  

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

const calculateCircleArea = function (radius) {
  if (radius > 0) {
  const circleArea = (Math.PI * Math.pow(radius, 2));
  return circleArea;
  }
};  

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined
