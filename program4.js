const program4 = {
  kick(msg) {
    this.yelp = msg;
    return () => this.yelp;
  }
};

module.exports = program4;
