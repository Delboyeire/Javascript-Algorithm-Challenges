/**
 * Created by Derek on 11/06/2017.
 * Return the remaining elements of an array
 * after chopping off n elements from the head.
 */

function slasher(arr, howMany) {
    // it doesn't always pay to be first
    return arr.slice(howMany, arr.length);
}

console.log(slasher([1, 2, 3], 2));
