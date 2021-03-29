const length = (x: string | any[], y: string | any[]): number => {
  var total: number = x.length + y.length;

  //unescessary but demonstates the interface allowing more than 1 type
  x.slice(0);

  if (x instanceof Array) {
    x.push('abc');
  }

  if (x instanceof String) {
    x.substr(1);
  }

  return total;
};

export { length };
