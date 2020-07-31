/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  let a = 1;
  let i=1;
  while (i<=n){
   a = a*i;
   i++;
  }
  return a;
}
factorial(0);
factorial(1); 
factorial(3); 
factorial(5);
