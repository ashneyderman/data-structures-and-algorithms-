var readline = require('readline');

const braces = {
  '{': '}',
  '}': '{',
  '[': ']',
  ']': '[',
  '(': ')',
  ')': '(',
};

function checkBraces (input) {
  let stack = new Array();
  let position = new Array();

  for(const idx in input) {
    let c = input.charAt(idx);
    let top = null;

    // console.log(idx, c);
    if(c === '{' || c === '(' || c === '[') {
      stack.push(c);
      position.push(idx);
    }

    if(c === '}' || c === ')' || c === ']') {
      top = stack.pop(); 
      if(top !== braces[c]) {
        // console.log('ERROR: ', 1 + parseInt(idx), ` GOT ${c} but matching bracket has to be ${braces[top]}`);
        console.log(`${1 + parseInt(idx)}`);
        process.exit();
      }
      position.pop();
    }
    
  }

  if(stack.length > 0) {
    let c = stack.pop();
    let pos = position.pop();
    // console.log(`ERROR: SYMBOL ${c} at position ${1 + parseInt(pos)} has no matching ${braces[c]}`);
    console.log(`${1 + parseInt(pos)}`);
    process.exit();
  }

  console.log('Success');
  process.exit();
}

process.stdin.setEncoding('utf8');
var rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

rl.on('line', checkBraces);