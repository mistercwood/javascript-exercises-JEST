const findTheOldest = function(obj) {
    const oldest = obj.sort(function(a, b){
        const last = (a.yearOfDeath ? a.yearOfDeath : (new Date()).getFullYear()) - a.yearOfBirth;
        const next = (b.yearOfDeath ? b.yearOfDeath : (new Date()).getFullYear()) - b.yearOfBirth;
        return last > next ? -1 : 1;
    });
    return oldest[0];
};

module.exports = findTheOldest;


