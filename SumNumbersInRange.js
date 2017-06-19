/**
 * Created by Derek on 19/06/2017.
 * We'll pass you an array of two numbers. Return the sum
 * of those two numbers and all numbers between them.
 *The lowest number will not always come first.
 */
function sumAll(arr) {
    var fullArr = [];
    if(arr[0]<arr[1] ){
        for(var i = arr[0];i<=arr[1];i++){
            fullArr.push(i);
        }
    }else{
        for(var j = arr[0];j>=arr[1];j--){
            fullArr.push(j);
        }
    }

    var sum = fullArr.reduce(function(acc, val) {
        return acc + val;
    }, 0);
    return sum;
}

console.log(sumAll([1, 4]));
