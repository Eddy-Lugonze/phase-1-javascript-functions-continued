// Function declaration for saturdayFun
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

// Function expression for mondayWork
const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
};

// Function that returns another function (wrapAdjective)
function wrapAdjective(symbol = "*") {
    return function(adjective = "special") {
        return `You are ${symbol}${adjective}${symbol}!`;
    };
}

// Exporting functions for testing
module.exports = { saturdayFun, mondayWork, wrapAdjective };
