"use strict";
{
    let sum = 0;
    function sumArray(arr) {
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum;
    }
    console.log(sumArray([1, 2, 3, 4]));
}
