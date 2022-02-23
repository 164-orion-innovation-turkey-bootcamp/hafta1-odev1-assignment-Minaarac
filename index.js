let input = [11, 15, 2, 7];
let target = 9;

function sumTarget(arr, target) {
    let input;
    let result = [0,0];

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if ((arr[i] + arr[j] === target)) {
                input = arr[i];
                result = [i, j];
            }
        }
    }
    return result.sort();
}
console.log("INDEX ON THE TARGET ");
console.log(sumTarget(input, target)); 


