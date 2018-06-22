let readline = require('readline');

process.stdin.setEncoding('utf8');
let rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

rl.on('line', readLine);

let n
let a = []
let currentInput = 'n'

function readArrayOrExit(line, errorMsg) {
  let arrStr = line.toString().split(' ')
  
  if(arrStr.length != n) {
    console.log(`too many or too few possible numbers expecting ${n} parsed ${arrStr.length}`)
    process.exit()
  }
  
  let result = []
  for(let i = 0; i < n; i++) {
    let e = parseInt(arrStr[i], 10)
    if(isNaN(e)) {
      console.log(errorMsg, arrStr[i])
      process.exit()
    } else {
      result.push(e)
    }
  }
  return result
}

function readNumberOrExit(line, errorMsg) {
  let a = parseInt(line.toString(), 10)
  if(isNaN(a)) {
    console.log(errorMsg, line.toString())
    process.exit()
  }
  return a
}

function readLine (line) {
  if (line !== "\n") {
    
    switch (currentInput) {
      case 'n':
        n = readNumberOrExit(line, "n has to be a number instead of")
        if(n < 2) {
          console.log(`too few numbers requested ${n}. Has to be at least 2`)
          process.exit()
        }
        currentInput = 'array'
        break;
      case 'array':
        a = readArrayOrExit(line, "array element has to be a number instead of")
        currentInput = null
        let result = calculate()
        console.log(result);
        process.exit();
        break;
      default:
        console.log("second input is not a number:", bstr);
        process.exit();
    }
  }
}

function calculate() {
  let max = a[0]
  let maxIdx = 0
  let result = a[0] * a[1]

  for(let i = 0; i < n; i++) {
    if(max < a[i]) {
      max = a[i]
      maxIdx = i
    }
  }
  
  for(let i = 0; i < n; i++) {
    if(i != maxIdx) {
      if(max * a[i] > result) {
        result = max * a[i]
      }
    }
  }

  return result
}
