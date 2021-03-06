/**
 * Created by Derek on 30/06/2017.
 *
 * Make a function that looks through an array of objects (first argument)
 * and returns an array of all objects that have matching property and value
 * pairs (second argument). Each property and value pair of the source object
 * has to be present in the object from the collection if it is to be included
 * in the returned array.
 *
 * For example, if the first argument is
 * [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }],
 * and the second argument is { last: "Capulet" }, then you must return the third object from the array
 * (the first argument), because it contains the property and its value, that was passed on as the second argument
 */
function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];

    var keys = Object.keys(source);
    collection.forEach(function(item){
        var keyCount =0, matchCount = 0, cont = false;
        keys.forEach(function (key) {
            keyCount++;
            if(item.hasOwnProperty(key) && item[key] === source[key]){
                matchCount++;
                cont = true;
            }
        });
        if(cont && matchCount === keyCount){
            arr.push(item);
        }
    });


        return arr;
}

console.log(whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }));