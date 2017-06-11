/**
 * Created by Derek on 11/06/2017.
 * Return true if the string in the first element of the
 * array contains all of the letters of the string in the
 * second element of the array.
 *For example, ["hello", "Hello"], should return true because
 *  all of the letters in the second string are present in the
 *  first, ignoring case.
 *  The arguments ["hello", "hey"] should return false because
 *  the string "hello" does not contain a "y".
 *  Lastly, ["Alien", "line"], should return true because all
 *  of the letters in "line" are present in "Alien".
 */
function mutation(arr) {
    var checkString= arr[0].toLowerCase(), containString = arr[1].toLowerCase();
    for(i = 0;i < containString.length ;i++){
        if(checkString.indexOf(containString[i]) == -1 ){
            return false;
        }
    }
    return true;
}

console.log(mutation(["hello", "hey"]));