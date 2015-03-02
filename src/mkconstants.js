const mkconstants = (app, obj, prevK) => {
  for (var k in obj) {
    var nextK = prevK ? prevK + '.' + k : app + '.' + k;
    if (obj[k] === null) obj[k] = nextK;
    else mkconstants(app, obj[k], nextK);
  }
  return obj;
};

export default mkconstants;