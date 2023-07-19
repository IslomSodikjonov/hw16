// Task 1
let longestName = '' 

function names(first, second, third) {
    let longest = [first, second, third]
    
    longest.forEach(name => {
        if(name.length > longestName.length){
            longestName = name
        }
    })
}

names('Alex', 'George', 'Michael')

console.log(longestName);



// Task 2
// function min(arr) {
//     if (Array.isArray(arr)) {
//       return Math.min(...arr);
//     } else if (typeof arr === 'object') {
//       const keys = Object.keys(arr);
//       if (keys.length === 0) {
//         return;
//       }
//       const values = arr[keys[0]];
//       return min(values);
//     }
//     return arr;
// }

// console.log(min(1, 2));
// console.log(min([1, 2])); 
// console.log(min({а: 1, b: 2})); 
// console.log(min({а: 1, b: 2}, {a: 11, b: 12}));  