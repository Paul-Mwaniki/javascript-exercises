const palindromes = function (word) {
    let clean = word.toLowerCase().replace(/[^a-z]/g, "");
    let normal = clean.split();
    let reverse = normal.reverse();
    let newWord = reverse.join();
    if (newWord == clean){
        return true;
    }else{
        return false;
    }

};

// Do not edit below this line
module.exports = palindromes;
