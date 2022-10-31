export const formatNumber = (x) => {
  let s = x.toString();
  for (let i = s.length - 3; i > 0; i -= 3) {
    s = s.slice(0, i) + "," + s.slice(i);
  }
  return s;
};
