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
