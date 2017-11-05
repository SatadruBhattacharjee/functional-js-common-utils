/* global describe, it, before */

import chai from 'chai';

import * as lib from '../lib/Library';

chai.expect();

var assert = chai.assert;
const expect = chai.expect;
const should = chai.should();

describe('forEach()', () => {
  let testData = [1,2,3,4];
  it('First item Should be ' + testData[0], () => {
    lib.forEach([1,2,3], (value, index) => {
      if (index === 0) {
        value.should.equal(testData[0]);
      }
    });
  });
});

describe('forEachObject()', () => {
  let testObj;

  before(() => {
    testObj = {
      firstName : 'satadru',
      lastName : 'bhattacharjee'
    }
  });

  it('First Name Should Be satadru' , () => {
    lib.forEachObject(testObj, (key, value) => {
      if (key === 'firstName') {
        value.should.equal('satadru');
      }
    });
  });
});

describe('unless()', () => {
  let numbers = [1,2,3];
  let result = false;

  it('Return true if first number is 1', () => {
    lib.unless(numbers[0] === 1, () => {
      result = true;
      assert(result, true);
    });
  });
});
