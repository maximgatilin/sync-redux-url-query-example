import {browserHistory} from 'react-router';

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

export function getValueFromUrl(input) {
  const [pathname, prop] = input.split('.');

  const currentLocation = browserHistory.getCurrentLocation();

  if (currentLocation.pathname !== `/${pathname}`) {
    return null;
  }

  const targetProp = currentLocation.query[prop];

  return targetProp === undefined ? null : targetProp;
}