// 1. Function Declaration:
function functionName(parameters) {
  // function body
}

// 2. Function Expression (Anonymous Function):
let functionName = function (parameters) {
  // function body
};

// 3. Arrow Function (ES6+):
let functionName = (parameters) => {
  // function body
};

// 4. Method Syntax (within an object):
let objectName = {
  methodName(parameters) {
    // function body
  },
};

// 5. Function Constructor (not recommended):
let functionName = new Function("parameters", "function body");

// 6. Immediately Invoked Function Expression (IIFE):
(function () {
  // function body
})();

// 7. Generator Function:
function* functionName(parameters) {
  // function body
}
