const removeFromArray = function(inputArray, toRemove1, toRemove2, toRemove3, toRemove4) {
    let newArray = inputArray;
    if (toRemove1 !== undefined) {
        let position = newArray.indexOf(toRemove1);
        if (position !== -1) {
            newArray.splice(position, 1); 
        }     
    }
    if (toRemove2 !== undefined) {
        let position = newArray.indexOf(toRemove2);
        if (position !== -1) {
            newArray.splice(position, 1); 
        }        
    }
    if (toRemove3 !== undefined) {
        let position = newArray.indexOf(toRemove3);
        if (position !== -1) {
            newArray.splice(position, 1); 
        }           
    }
    if (toRemove4 !== undefined) {
        let position = newArray.indexOf(toRemove4);
        if (position !== -1) {
            newArray.splice(position, 1); 
        }          
    }


    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
