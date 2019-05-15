module.exports = function softmaxFunction(vector) {
  const sum = vector.reduce(function (acc, value) {
    return acc + Math.exp(value);
  }, 0);

  return vector.map(function (value) {
    return Math.exp(value) / sum;
  });
};
