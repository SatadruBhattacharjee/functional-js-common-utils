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

/**
 * Currying is a process of converting a function with n number of arguments into a nested unary function
 * @example <caption>We can call this function like add(4,4), which is going to give
  me the result 8, with curry</caption>
 * const addCurried = x => y => x + y;
 * addCurried(4)(4) => 8
 */
const curry = (fn) => {
  if (typeof fn !== 'function') {
    throw Error('No function provided');
  }

  return function curryFn (...args) {
    if (args.length < fn.length) {
      return function () {
        return curryFn.apply(null, args.concat([].slice.call(arguments)));
      }
    }

    return fn.apply(null, args);
  }

};

/**
 * compose function needs to take the output of one function and give it as input to another function.
 * @example <caption>It takes two functions, a and b, and returns a function that takes the argument c.</caption>
 * const compose = (a, b) => (c) => a(b(c))
 */
const compose = (...fns) => {
  (value) => reduce(fns.reverse(), (acc, fn) => fn(acc), value);
};


export  {
  forEach,
  forEachObject,
  unless,
  curry,
  compose
};

