// runs with node
// > node -v
// v8.9.4
// > node ${filename}
// from: https://babeljs.io/learn-es2015/

// lexical This
console.log("Testing 2.. lexical this => ");
var bob = {
  _name: "Bob",
  _friends: [],
  printFriends() {
    this._friends.forEach(f =>
      console.log(this._name + " knows " + f))
  },
  addFriend(name) {
    this._friends.push(name)
  }
};


bob.addFriend("Satish");
bob.printFriends()
