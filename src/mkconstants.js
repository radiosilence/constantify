const mkconstants = (app, obj, prevK) => {
  for (let k in obj) {
    let nextK = `${prevK ? prevK : app}.${k}`;
    if (obj[k] === null) obj[k] = nextK;
    else if (typeof obj[k] === 'object') mkconstants(app, obj[k], nextK);
  }
  return obj;
};

export default mkconstants;