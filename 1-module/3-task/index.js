/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
function ucFirst(str) {
  if (str.length == 0) {
    return str;
  }
  let end =  str.slice(1);
  let start = str[0].toUpperCase();  
  let result = start + end;
  return result;
}
  console.log(ucFirst('вася'));
