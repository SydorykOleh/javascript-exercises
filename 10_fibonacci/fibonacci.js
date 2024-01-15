const fibonacci = function(number) {
    let F0;
    let F1 = 0;
    let F2 = 1;

    if (number == 0){ return 0; }    
    if (number < 0){ return "OOPS"; }

    for (let i = 0; i < number; i++) {
        F0 = F1 + F2;
        F2 = F1;
        F1 = F0;
    }
    return F0;
};

// Do not edit below this line
module.exports = fibonacci;
