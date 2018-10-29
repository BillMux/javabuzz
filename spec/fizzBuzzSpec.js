describe('fizzBuzz', function() {
  var fizzbuzz
  beforeEach(function() {
   fizzbuzz = new fizzBuzz();
 });
  describe('knows when a number is', function() {
    it('divisible by 3', function() {
        expect(fizzbuzz._isDivisibleBy(3, 3)).toBe(true);
    });
    it('not divisible by 3', function() {
        expect(fizzbuzz._isDivisibleBy(4, 3)).toBe(false);
    });
    it('divisible by 5', function() {
        expect(fizzbuzz._isDivisibleBy(5, 5)).toBe(true);
    });
    it('not divisible by 5', function() {
        expect(fizzbuzz._isDivisibleBy(4, 5)).toBe(false);
    });
    it('divisible by 15', function() {
        expect(fizzbuzz._isDivisibleBy(15, 15)).toBe(true);
    });
    it('not divisible by 15', function() {
        expect(fizzbuzz._isDivisibleBy(4, 15)).toBe(false);
    });

    describe('when played, says', function() {
      it('"Fizz" when a number is divisible by 3', function() {
        expect(fizzbuzz.says(3)).toEqual('Fizz');
      });
      it('"Buzz" when a number is divisible by 5', function() {
        expect(fizzbuzz.says(5)).toEqual('Buzz');
      });
      it('"FizzBuzz" when a number is divisible by 15', function() {
        expect(fizzbuzz.says(15)).toEqual('FizzBuzz');
      });
      it('the number when a number is not divisible by 3 or 5', function() {
        expect(fizzbuzz.says(4)).toEqual(4);
      });
    });
  });
});
