// runs with node
// > node -v
// v8.9.4
// > node ${filename}
// from: https://babeljs.io/learn-es2015/

console.log("Testing 3.. lexical args => ");
// lexical args
//
function square() {
  let example = () => {
    let numbers = [];
    for ( let number of arguments ) {
      numbers.push(number * number);
    }
    console.log(numbers);
  }
  return example();
}


square(
  2, 4, 7, 9, 11, 18
)

console.log("representation of arguments => ");

function check_arguements() {
  console.log(arguments);
}

check_arguements(1,2,3,4,5);
