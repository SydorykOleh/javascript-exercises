const repeatString = function(word, numberOfRepeats) {
    let output = "";
    if (numberOfRepeats < 0) {
        return  "ERROR"
    }
    for (let i = 0; i < numberOfRepeats; i++) {
        output += word;
    }
    return output
};

// Do not edit below this line
module.exports = repeatString;
