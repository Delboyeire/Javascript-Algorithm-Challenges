/**
 * Created by Derek on 09/06/2017.
 */
function palindrome(str) {
    // Good luck!
    str = str.toLowerCase();
    str = str.replace(/[^\w\s]|_/gi, '');
    str = str.replace(/ /g, '');
    var rev = str.split('');
    rev = rev.reverse();
    rev = rev.join('');
    if(str === rev){
        return true;
    }else{
        return false;
    }
}


palindrome("A man, a plan, a canal. Panama");
