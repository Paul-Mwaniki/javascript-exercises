const repeatString = function(x='hey', num = 10) {
    let y = "";
    if(num < 0){
        return "ERROR";
    }
 for(let i = 0;i < num; i++){
        y += x;
    
 }
 return y;
 
};

// Do not edit below this line
module.exports = repeatString;
