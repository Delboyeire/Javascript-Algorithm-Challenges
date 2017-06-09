/**
 * Created by Derek on 09/06/2017.
 */

function largestOfFour(arr) {
    var result = [];
    arr.forEach(function(subarray) {
        var subTop = 0;
        console.log(subarray);
        subarray.forEach(function(elem){
            if(elem > subTop){
                subTop = elem;
            }
        });
        result.push(subTop);
    });
    return result;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
