/**
 * Created by Derek on 11/06/2017.
 *
 * One of the simplest and most widely known ciphers is a Caesar cipher,
 * also known as a shift cipher. In a shift cipher the meanings of the
 * letters are shifted by some set amount.
 *
 * A common modern use is the ROT13 cipher, where the values of the letters
 * are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
 *
 * Write a function which takes a ROT13 encoded string as input and returns a decoded string.
 */
function rot13(str) { // LBH QVQ VG!
    return str.replace(/[A-Za-z]/g, function (c) {
        return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".charAt(
            "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm".indexOf(c)
        );
    } );
}

// Change the inputs below to test
console.log(rot13("LBH QVQ VG"));
