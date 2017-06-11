/**
 * Created by Derek on 11/06/2017.
 * Write a function that splits an array (first argument)
 * into groups the length of size (second argument) and
 * returns them as a two-dimensional array.
 */
function chunkArrayInGroups(arr, size) {
    var chunks = [];
    var i = 0;

    while (i < arr.length) {
        chunks.push(arr.slice(i, i += size));
    }

    return chunks;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));