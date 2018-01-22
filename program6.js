function program6(numbers) {
  if (numbers.length != 0) { return Math.min(...numbers); }
  
    return 0;
}
module.exports = program6;

//let numbers = process.argv.slice(2)
//console.log('The minimum of '+'['+numbers+']'+ ' is ' +Math.min(...numbers));
