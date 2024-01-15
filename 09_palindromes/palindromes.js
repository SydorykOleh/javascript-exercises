const palindromes = function (string) {
    let cleanString = string.replaceAll(" ", "").replaceAll(",", "").replaceAll("!", "").replaceAll(".", "").toLowerCase();
    let toArray = cleanString.split('');
    let reverseArray = toArray.reverse();
    let joinArray = reverseArray.join("");

    //console.log(string + " - original");
    //console.log(cleanString + " - clean");
    //console.log(joinArray + " - reversed");

    return (joinArray == cleanString);
};

// Do not edit below this line
module.exports = palindromes;
