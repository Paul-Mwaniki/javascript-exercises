const reverseString = function(x) {
    let arrayString = x.split("");
    let reverseArray = arrayString.reverse();
    let newString = reverseArray.join("");

    return newString;

};

// Do not edit below this line
module.exports = reverseString;
