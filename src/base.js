/**
 * Created by satadru on 11/5/17.
 */

const forEach = (array, fn) => {
  let counter = 0;
  for (let value of array) {
    fn(value, counter);
    counter ++;
  }
};

const forEachObject = (obj, fn) => {
  for (let property in obj) {
    if (obj.hasOwnProperty(property)) {
      fn(property, obj[property]);
    }
  }
};

const unless = (predicate, fn) => {
  if (predicate) {
    fn();
  }
};

export  {
  forEach,
  forEachObject,
  unless
};

