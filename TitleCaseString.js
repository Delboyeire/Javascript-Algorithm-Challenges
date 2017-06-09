/**
 * Created by Derek on 09/06/2017.
 */
function titleCase(str) {
    strArr = str.split(' ');
    var strCapped = strArr.map(function(word) {
        var curWord;
        curWord = word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
        return curWord;
    });
    return strCapped.join(' ');
}

console.log(titleCase("I'm a little tea pot"));