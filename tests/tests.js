describe('A fizzbuzz unit test suite', function () {
    
    it("should return fizz when input is 3", function() {
        expect(fizzbuzz(3)).toBe('fizz');
    });

    it('should return buzz when input is 5', function () {
        expect(fizzbuzz(5)).toBe('buzz');
    });
    
    it('should return the same when input is not 3 or 5', function () {
        expect(fizzbuzz(7)).toBe(7);
    })
    
    it('should return fizz when input is divisible by 3', function () {
        expect(fizzbuzz(6)).toBe('fizz');
        expect(fizzbuzz(9)).toBe('fizz');
        expect(fizzbuzz(12)).toBe('fizz');
    })
    
    it('should return fizz when input is divisible by 5', function () {
        expect(fizzbuzz(10)).toBe('buzz');
        expect(fizzbuzz(20)).toBe('buzz');
        expect(fizzbuzz(250)).toBe('buzz');
    })
    
    it('should return fizzbuzz when input is divisible by 3 and 5', function () {
        expect(fizzbuzz(15)).toBe('fizzbuzz');
        expect(fizzbuzz(45)).toBe('fizzbuzz');
        expect(fizzbuzz(15)).toBe('fizzbuzz');
    })
    
    it('should return the same when the input is not divisible by 3 or 5', function () {
        expect(fizzbuzz(7)).toBe(7)
        expect(fizzbuzz(11)).toBe(11)
        expect(fizzbuzz(56)).toBe(56)
    })
    
});