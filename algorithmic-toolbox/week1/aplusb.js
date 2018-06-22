var readline = require('readline');

process.stdin.setEncoding('utf8');
var rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

rl.on('line', readLine);

function readLine (line) {
  if (line !== "\n") {
    var astr = line.toString().split(' ')[0]
    var a = parseInt(astr, 10);
    
    if(isNaN(a)) {
      console.log("first input is not a number:", astr);
      process.exit();
    }
    
    var bstr = line.toString().split(' ')[1]
    var b = parseInt(bstr, 10);
    if(isNaN(b)) {
      console.log("second input is not a number:", bstr);
      process.exit();
    }

    if(a > 9 || a < 0) {
      console.log("first number has to be a <= 0 and a >= 9:", a);
      process.exit();
    }
    if(b > 9 || b < 0) {
      console.log("second number has to be b <= 0 and b >= 9:", b);
      process.exit();
    }
    
    console.log(a + b);
    process.exit();
  }
}
