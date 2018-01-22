//var inputs = process.argv.slice(2);
function program3(inputs) {
    const result = inputs.map(x => x)
                        .reduce((newString, element) => newString += element[0], '');
//let a = Array.from(inputs)

//console.log("["+a.toString()+']', "becomes", "\""+result.toString()+"\"");
//console.log(inputs)

const res = `[${inputs.toString()}]` + ' becomes ' + `"${result.toString()}"`;
return res;
}

module.exports = program3;
