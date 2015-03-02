const constantify = (app, obj, prevK) => {
  for (var k in obj) {
    var nextK = prevK ? prevK + '.' + k : app + '.' + k;
    if (obj[k] === null) obj[k] = nextK;
    else constantify(app, obj[k], nextK);
  }
  return obj;
};

export default constantify;