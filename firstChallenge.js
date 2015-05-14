/* Prabhu Sivaraja
   First Admission Challenge
*/

/* Takes a string as input, creates a decrypted word by
   concatanating the last char of each word in the original string.
   
   Handles empty input string, repeating white spaces etc. 

   input  : original string
   output : decrypted return string. Empty string may be returned.
*/
function decryptA(message) {
   
    var retString = "", splitString = "";
   
    /* Check to see whether input is valid */
    if (message) {
        splitString = message.split(" ");

        for (var i = 0; i < splitString.length; i++) {
            retString += splitString[i].charAt(splitString[i].length - 1);
        }
    }
    return retString;
}       


/* Takes a string as input, creates a decrypted word by
   concatanating the last char OR the first char(depending
   on which is greater) of each word in the original string. 
   
   Handles empty input string, repeating white spaces etc. 

   input  : original string
   output : decrypted return string. Empty string may be returned.
*/
function decryptB(message) {
   
    var retString = "", splitString = "";
   
    /* Check to see whether input is valid */
    if (message) {
        /* convert input msg to all lower case so that both 
            chars being compared belong to same case */
        message = message.toLowerCase();

        splitString = message.split(" ");

        for (var i = 0; i < splitString.length; i++) {
            if (splitString[i].charAt(0) > 
                splitString[i].charAt(splitString[i].length - 1))
                retString +=  splitString[i].charAt(0);
            else
                retString +=  splitString[i].charAt(splitString[i].length - 1);
        }
    }
    return retString;
}
