//export
export const sqrt = Math.sqrt;
export function square(x) {
  return x*x;
}
export function diag(x, y) {
  return sqrt(square(x) + square(y));
}

//import

import {square, diag} from 'lib';
console.log(square(4));
console.log(diag(5,2));

import * as lib from 'lib';
console.log(lib.square(4));
console.log(lib.diag(5,2));

import {LongMemberName as shortName}
from 'my-module';

export default function () {...}

import myFunc from 'myFunc';
myFunc();
