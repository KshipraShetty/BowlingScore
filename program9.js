module.exports = (val, transform = x => x) => {
  if (typeof (transform) !== 'number') {
    return `${val}${'!'.repeat(val.length)}`;
  }
  
    return `${val}${'!'.repeat(transform)}`;
};
