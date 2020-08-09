/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */

let salaries = {
  John: 1000,
  Ann: 1600,
  Pete: 1300
};

function sumSalary(salaries) {
  let sum = 0;
  for(let key in salaries) {
   let value = salaries[key];
   if( typeof value === "number") {
     sum += value;
   }
  }   
  return sum;
}
