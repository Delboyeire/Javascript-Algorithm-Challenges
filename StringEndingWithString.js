/**
 * Created by Derek on 09/06/2017.
 */
function confirmEnding(str, target) {
    if(str.substr(-target.length) === target){
        return true;
    }
    return false;
}

console.log(confirmEnding("Bastian", "n"));