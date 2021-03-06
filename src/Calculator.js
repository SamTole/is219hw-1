const MathOperations = require('./Operations/MathOperations');
const Calculation = require('./models/Calculation');

class Calculator {
    static Sum(a, b) {
        return new Calculation(a, b, "Sum");
    }
}

// module.exports to take this out of the file and place somewhere else
// Add name of function or class to export

module.exports = Calculator;