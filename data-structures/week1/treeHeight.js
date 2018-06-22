var readline = require('readline');
let cmdLines = [];

function calcHeight(root) {
  if(root.children.length === 0) {
    return 1;
  }

  let q = root.children;
  let maxHeight = 1;
  while(true) {
    if(q.length === 0) {
      break;
    }

    q = q.reduce((acc, n) => {
      if(n.children.length > 0) {
        n.children.forEach((c) => { acc.push(c); });
      }
      return acc;
    }, []);
  
    maxHeight++;
  }

  return maxHeight;
}

function buildTree(spec) {
  spec.forEach((node, idx) => {
    let { parent } = node;
    if(parent !== -1) {
      spec[parent].children.push(node);
    }
  });
  return spec.find(({parent}) => parent === -1 );
}  

function treeHeight(numberOfNodes, input) {
  const taggedNodes = input.
                        split(' ').
                        filter((e) => e.trim() !== '').
                        map((e) => parseInt(e)).
                        map((v, idx) => ({ tag: idx, parent: v, children: [] }));
  let root = buildTree(taggedNodes);
  console.log(calcHeight(root));
  process.exit();
}

process.stdin.setEncoding('utf8');
var rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

rl.on('line', (line) => {
  cmdLines.push(line);
  if(cmdLines.length >= 2) {
    treeHeight(parseInt(cmdLines[0]), cmdLines[1]);
  }
});