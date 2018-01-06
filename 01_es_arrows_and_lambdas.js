// runs with node
// > node -v
// v8.9.4
// > node ${filename}
// from: https://babeljs.io/learn-es2015/

evens = [
  2, 4, 6, 8
]

fives = []

// lamdas and () => {}
console.log("Testing 1.. simple lambdas => ");

var odd = evens.map(i => i+1);
var nums = evens.map((v, i) => v+i);

nums.forEach(v => {
  if (v%5 === 0)
    fives.push(v);
});

console.log(fives);
