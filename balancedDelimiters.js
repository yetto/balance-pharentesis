/*
  Find if ${string} has balanced
  scope delimeters.
*/
function balancedDelimiters(str) {
  var open = ['(','[','{'],
      close = [')',']','}'],
      stack = [];

  for (var i = 0; i < str.length; i++) {

    var o = open.forEach(function(char){
      if (str.charAt(i) === char) {
        // Push index of Character
        stack.push(i)
        return true;
      }
    });

    // If opening delimiter, continue to next iteration
    if (o) continue;

    // Pop if matching delimiter is found
    close.forEach(function(char){
      if (str.charAt(i) === char) stack.pop()
    });

  }

  return (stack.length === 0) ? true : false

};

/*
  Different strings for testing
  will log false or true depending
  if there are balanced or not
*/
[
  balancedDelimiters("(aaa){{{vvv}[bbb]"),
  balancedDelimiters("({asd}dd)[asd]*"),
  balancedDelimiters("({asd}dd)[as[[d]*"),
  balancedDelimiters("({asddddd}{}()[]dd)[as[d]]*"),
  balancedDelimiters("({asd}dd[as[d]]")
].forEach(function(value){console.log(value)})