const sobiranje = (x, y) => {
  return x + y;
};

const odzemanje = (x, y) => {
  return x - y;
};

const mnozhenje = (x, y) => {
  return x * y;
};

const delenje = (x, y) => {
  return x / y;
};

module.exports = {
  sobiranje,
  odzemanje,
  mnozhenje,
  delenje,
};

module.exports.ostatok = (x, y) => {
  return x % y;
};
