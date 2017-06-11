/**
 * Created by Derek on 11/06/2017.
 * Remove all falsy values from an array.
 * Falsy values in JavaScript are false,
 * null, 0, "", undefined, and NaN.
 */
function bouncer(arr) {
    results =[];
    checks = [false, null, 0, "", undefined];
    arr.forEach(function(element){
        if(checks.indexOf(element) < 0){
            results.push(element);
        }
    });
    for(i=0;i<results.length;i++) {
        if (typeof(results[i]) === "number" && isNaN(results[i])) {
            results.splice(i, 1);
        }
    }
    return results;

}

console.log(bouncer([1, null, NaN, 2, undefined]));
