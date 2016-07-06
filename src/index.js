import $ from 'jquery';
import './style.scss';

let num = 0;
const setTime = () => {
  num++;
  $('#main').html(`You have been on this page for ${num} seconds.`);
};

setInterval(setTime, 1000);

// Inspiration for this function taken from https://davidwalsh.name/es6-generators
function *genFunc(x) {
  const y = yield (x + 2);
  return (x + y);
}

const val = genFunc(5);

console.log(val.next());
console.log(val.next(10));
