// How do you find the largest number in an array?

const arr = [2,43,57,4,87,44,2];
let largest;

function largestnumber(arr) {
    if(arr.length == 0){
        return undefined;
    }
    largest = arr[0];
    for (let i = 1; i < arr.length  ; i++) {
        if (arr[i]> largest) {
            largest = arr[i];
        }
 }
 return largest;
}

console.log("the largest number is ", largestnumber(arr));