/**
 * Created by Derek on 09/06/2017.
 */
function findLongestWord(str) {
    strArr = str.split(' ');
    var longest = 0;
    strArr.forEach(function(word) {
        if(word.length > longest){
            longest = word.length;
        }
    });
    return longest;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
