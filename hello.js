// ➡ 1.Type Annotations on Variables
var myName = "Alice";
// ➡ 2.FUnctions
function greet(name) {
    console.log("Hello, ".concat(name.toUpperCase(), "!!"));
}
// ➡ Return Type Annotations
function addition(first, second) {
    return first + second;
}
var result = addition(5, 3);
// ➡ Anonymous Functions
var names = ["Alice", "Bob", "Eve"];
names.forEach(function (name) {
    console.log(name.toUpperCase());
});
// ➡ Object Types
function printCoord(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });
// ➡ Optional Properties
function printName(obj) {
    // ...
}
// Both OK
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });
// ➡ Defining a Union Type
function printId(id) {
    console.log("Your ID is: " + id);
}
// OK
printId(101);
// OK
printId("202");
