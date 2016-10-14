/*
  Input is: [ '{}[]()', '{[}]' ];
  Output should be: ["YES","NO"];
*/
var input = ['{}[]()', '{[}]'];
var validate = ["YES", "NO"];

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
  scope delimeters.
*/
function balancedDelimiters(str) {
  var open = ['(', '[', '{'],
    close = [')', ']', '}'],
    stack = [],
    position, _VALUE, i, prev = null;

  for (var i = 0; _VALUE = str.charAt(i); i++) {

    var openCheck = open.indexOf(_VALUE),
      closeCheck = -1;

    if (openCheck != -1) {
      stack.push(openCheck + 1);
      position = openCheck;
    } else if (true) {
      if (prev === null) return false;
      closeCheck = close.indexOf(_VALUE);
    }

    if (openCheck === -1 && closeCheck === -1) continue;


    if (prev === stack[stack.length - 1] && closeCheck + 1 === prev) {
      stack.pop()
    }
    prev = stack[stack.length - 1];

  }

  return stack.length === 0;

};