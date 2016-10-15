/*
  Input is: [ '{}[]()', '{[}]' ];
  Output should be: ["YES","NO"];
*/
var input = ['{}[]()', '{[}]', '{test}[]()[{()}]', 'test([])','test([]{)}'];
var validate = ["YES", "NO", "YES", "YES", "NO"];

function braces(values) {
  var res = [];
  values.forEach(function(value) {
    res.push(balancedDelimiters(value) ? "YES" : "NO");
  });
  return res;
};
var output = (braces(input).toString() === validate.toString());
console.log("Success?", output);

/*
  Find if ${string} has balanced
  scope delimiters.
*/
function balancedDelimiters(str) {
  var open = ['(', '[', '{'],
    close = [')', ']', '}'],
    stack = [],
    _VALUE, i, prev = null,
    openCheck, closeCheck = -1;

  for (i = 0; _VALUE = str.charAt(i); i++) {

    openCheck = open.indexOf(_VALUE);

    // Lets look for opening delimiters
    if (openCheck != -1) {
      // if we find one, push it to the stack
      stack.push(openCheck);
    } else {
      // if we don't, then lets check for closing ones
      closeCheck = close.indexOf(_VALUE);
      // if prev is null means it is our fist char, if
      // our first char is a closing delimiter return false
      if (prev === null && closeCheck != -1) return false;
    }

    // If char is not open or close then continue
    if (openCheck === -1 && closeCheck === -1) continue;

    // If our prev delimiter is for example open[1]
    // then our closing one should be close[1], this
    // ensures our prev (opening tag) is the same type
    if (prev === stack[stack.length - 1]) {
      if (closeCheck === prev) stack.pop();
      // If our prev which equals our last found opening
      // delimiter is not prev then they are not the same
      // type, therefor return false
      else if (closeCheck != prev) return false
    }

    // Logs our current delimiter type
    prev = stack[stack.length - 1];

  }

  // If our stack is empty, all cool
  return stack.length === 0;

};