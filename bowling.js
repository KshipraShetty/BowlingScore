function bowling(...args) {
  let result = args[0][0];
  const arg = args[0];
  // let count = 0;
  let temp = 0;
  // for empty array
  if (arg.length === 0) {
    return 0;
  }
  for (let i = 1; i < arg.length; i += 1) {
    // calculate temp to check spare
    temp = arg[i - 1] + arg[i];
    // spare condition and spare not in first frame
    if (i % 2 !== 0 && temp === 10 && i !== 1) {
      result += temp + (arg[i + 1] - arg[i - 1]);
    } else if (i === 1 && temp === 10) { // spare in first frame
      result = temp + arg[i + 1];
    } else if (arg[i - 1] === 10 && i === 1) {
      result = 10 + arg[i] + arg[i + 1] + arg[i];
    } else if (arg[i] === 10) {
      result += arg[i + 1] + arg[i + 2] + 10;
    } else {
      result += arg[i];
    }
    temp = 0;
  }
  return result;
}

module.exports = bowling;
