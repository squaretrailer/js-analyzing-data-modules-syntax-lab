// Import datejs to extend Date object with formatting methods
require('datejs');

// Step one
function combineUsers(...args) {
  // Step 2: Initialize the Return Object
  const combinedObject = {
    users: []
  };

  // Step 3
   for (let i = 0; i < args.length; i++) {
    // Step 4 Merge arrays
    combinedObject.users = [...combinedObject.users, ...args[i]];
   }


   //Step 5 add merge date
    combinedObject.merge_date = new Date().toString('M/d/yyyy');
    
    //Return object
     return combinedObject;
  }
  // Example usage 
const result = combineUsers(['alice', 'bob'], ['charlie'], ['david', 'eve']);
 console.log(result);

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};