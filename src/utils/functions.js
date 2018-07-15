export function getMinVal(array, field) {
  return array.reduce((prev, current) => {
    return Math.min(prev, current[field]);
  }, Infinity);
}

export function getMaxVal(array, field) {
  return array.reduce((prev, current) => {
    return Math.max(prev, current[field]);
  }, 0);
}