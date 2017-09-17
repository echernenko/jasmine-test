// commenting output - it will be tested by Jasmine
// const arr = [1, 2, 3, "4", 5, function(){return 6;}, [7, [8, 9], 10]];

// using simple for cycle
function flatten(arr){
    let result = [];
    for (var i = 0; i < arr.length; i++){
        // processing function case
        if (typeof arr[i] === 'function'){
            arr[i] = arr[i]();
        }
        if (Array.isArray(arr[i])){
            result = result.concat(flatten(arr[i]));
        } else {
            // here real filling in array is happening
            // let's make it integer all the time
            const elToPush = parseInt(arr[i], 10);
            result.push(elToPush);
        }
    }
    return result;
}

module.exports = flatten;

// printing the result 
// console.log(flatten(arr));
