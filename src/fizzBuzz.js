var fizzBuzz = function(){};

  fizzBuzz.prototype._isDivisibleBy = function(number, divisor) {
    return (number % divisor === 0);
  };
  fizzBuzz.prototype.says = function(number) {

    if (this._isDivisibleBy(number, 15)) {
      return 'FizzBuzz';
    }

    if (this._isDivisibleBy(number, 3)) {
      return 'Fizz';
    }

    if (this._isDivisibleBy(number, 5)) {
      return 'Buzz';
    }
    else {
      return number;
    }

  };
