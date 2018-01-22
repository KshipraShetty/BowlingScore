function program2(name) {
//let name = process.argv[2]
//console.log(`Hello, ${name}!
 //Your name lowercased is "${name.toLowerCase()}".`);


 let a = `Hello, !
  Your name lowercased is.`;
if (name != null) {
   a =
   `Hello, ${name}!
 Your name lowercased is "${name.toLowerCase()}".`;
   }
return a;
}
module.exports = program2;
