var fizzBuzz = function(){};
fizzBuzz.prototype._isDivisibleBy = function(number, divisor) {
  return (number % divisor === 0);
};
fizzBuzz.prototype.says = function(number) {
  string = ''
  if (this._isDivisibleBy(number, 3)) {
    string += 'Fizz';
  }
  if (this._isDivisibleBy(number, 5)) {
    string += 'Buzz';
  }
  if (!this._isDivisibleBy(number, 3) && !this._isDivisibleBy(number, 5)) {
    string = number;
  }
  return string
};
