const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];
function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
  const item1 = arr.shift();
  return cb(item1);
}

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  const thisLong = arr.length;
  return cb(thisLong);
}

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  const lastItem = arr.pop();
  return cb(lastItem);
}

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  const add = a + y;
  cb(add);
}

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  const times = x * y;
  cb(times);
}

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
   
  return cb(list.includes(item));
}
 const maybeTrue = (BOO) =>{
   if (BOO !== true){
     return false;
   }else { 
     return true;
  }
 }
 console.log(contains('penz', items, maybeTrue));
/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.

}
