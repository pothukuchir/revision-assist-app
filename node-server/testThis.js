const obj = { a: "Custom" };

// Variables declared with var become properties of the global object.
var a = "Global";

function whatsThis() {
  return this.a; // The value of this is dependent on how the function is called
}

console.log(whatsThis()); // 'Global' as this in the function isn't set, so it defaults to the global/window object in non–strict mode
console.log(whatsThis.call(obj)); // 'Custom' as this in the function is set to obj
whatsThis.apply(obj); // 'Custom' as this in the function is set to obj
