// runs with node
// > node -v
// v8.9.4
// > node ${filename}
// from: https://babeljs.io/learn-es2015/

console.log("Testing 4.. formatted strings => ");
var person1 = "Bob";
var person2 = "Harry";

console.log(`${person1} met ${person2} at bar`);


// unescaped strings
console.log(String.raw`What so ever you so! "\n" Dont look tired!`);
console.log(`What so ever you so! "\n" Dont look tired!`);

siteUrl = "jaydihenkar.com";

console.log(`https://${siteUrl}/`);
