//let userArray = process.argv.slice(2);

function program5(userArray) {
  const user = {};
  if (userArray.length != 0 && userArray[1] != undefined && userArray[2] != undefined) {
    [, user.username, user.email] = userArray;
  }
return user;
//console.log(user);
}

module.exports = program5;
