const sumAll = function(x, y) {
    let sum = 0;
    if(x<0 || y<0 || !Number.isInteger(x)|| !Number.isInteger(y)){
        return "ERROR";

    }else if(y > x){
    for(let a = x; a <=y; a++){
        sum += a;
                }
        }else{
            for(let a = y; a <=x; a++){
                sum += a;        
               }       
            };
return sum;

}

// Do not edit below this line
module.exports = sumAll;
