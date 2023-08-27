function stringChanger(word, operation) {
  if (operation === "capitalize") {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
  if (operation === "uppercase") {
    return word.toUpperCase();
  }
  if (operation === "double") {
    return word + word;
  }
  if (operation === "reverse") {
    return word.split("").reverse().join("");
  }
  if (operation === "unknown") {
    return word;
  }
}

console.log(stringChanger("foo", "capitalize")); //"Foo"
console.log(stringChanger("foo", "uppercase")); //FOO
console.log(stringChanger("foo", "double")); //"foofoo"
console.log(stringChanger("foo", "reverse")); //"oof"
console.log(stringChanger("foo", "reverse")); //"oof"
console.log(stringChanger("foo", "reverse")); //"oof"
// TESTS
// DO NOT MODIFY ANYTHING BELOW THIS LINE

let score = 0;

if (stringChanger("foo", "capitalize") === "Foo") score++;
if (stringChanger("foo", "uppercase") === "FOO") score++;
if (stringChanger("foo", "double") === "foofoo") score++;
if (stringChanger("foo", "reverse") === "oof") score++;

if (stringChanger("foo", "unknown") === "foo") score++;

console.log("You have scored " + score + "/5 points.");
