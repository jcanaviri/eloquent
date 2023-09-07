// This code counts the numbers from 1 to 10
let total = 0,
  count = 1;

while (count <= 10) {
  total += count;
  count++;
}

console.log(total); // Output: 55

// This code calculates the factorial of a number
function factorial(n) {
  if (n === 0) return 1;
  else return n * factorial(n - 1);
}

console.log(factorial(8)); // Output: 40320
