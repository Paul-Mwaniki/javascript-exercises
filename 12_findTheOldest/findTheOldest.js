const findTheOldest = function(array) {

    array.forEach(element => {
        let age;
        age = element.yearOfDeath - element.yearOfBirth;
        return element.name;
    });

};

// Do not edit below this line
module.exports = findTheOldest;
