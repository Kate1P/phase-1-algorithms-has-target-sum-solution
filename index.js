function hasTargetSum(array, target) {
  const seenNumbers = {}
  for (let i = 0; i<array.length; i++ ) {
    const complement = target - array[i];
    if (seenNumbers[complement]) return true;
    seenNumbers[array[i]] = true
  }
  return false;
}
 



 // First Resolution
  // function hasTargetSum(array, target) {
 //Write your algorithm here
// for (let i = 0; i<array.length; i++ ) {
  // n steps 
 // const complement = target - array[i]
  //for (let j = i + 1; j < array.length; j++) {
    // n * n steps
  //  if (array[j] === complement) {
  //    return true;
  //  } } } return false; }


/* 
  Write the Big O time complexity of your function here
Runtime: O(n^2)
Space: O(n)

*/

/* 
  Add your pseudocode here
  itterate through each number in the array 
  for the current number identify an accomplement that adds to the target(complement = target - the current number)
  itterate through the rest of the array 
  check if any number is our complement
  if so, return true

  if I reach the end of the array, return false


  Second Solution
  create an object to keep track of numbers we've already seen
    itterate through each number in the array 
    for the current number identify an accomplement that adds to the target(complement = target - the current number)
  check if any key on out obj is the complement
  if so, return true
  otherwise, we want to add that number to the object
  
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));
  
  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 6, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
