/**
 * Created by Derek on 19/06/2017.
 *
 *Compare two arrays and return a new array with any items only found
 * in one of the two given arrays, but not both. In other words,
 * return the symmetric difference of the two arrays.
 *
 */

function diffArray(arr1, arr2) {
    var newArr = [];
    var check = true;
    arr1.forEach(function(word){
        check = true;
        arr2.forEach(function(word2){
            if(word === word2){
                check = false;
            }
        });
        if(check){
            newArr.push(word);
        }

    });
    arr2.forEach(function(word){
        check = true;
        arr1.forEach(function(word2){
            if(word === word2){
                check = false;
            }
        });
        if(check){
            newArr.push(word);
        }

    });

    return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
