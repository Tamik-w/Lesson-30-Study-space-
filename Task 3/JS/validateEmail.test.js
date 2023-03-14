const assert = chai.assert;

describe('validateEmail', function() {
    describe('valid string', function() {
        it('not an empty string', function() {
            assert.equal(validateEmail(''), false)
        });
        it('typeof string', function() {
            assert.equal(validateEmail(222), false, 'number error');
            assert.equal(validateEmail(true), false, 'boolean error');
            assert.equal(validateEmail({}), false, 'object error');
        });
        it('not all spaces', function() {
            assert.equal(validateEmail('    '), false)
        });
        it('Don\'t have less than 5 symbols', function() {
            assert.equal(emailLength('aaaaa'), true, 'Email length less than 5 symbols')
        });
    })

    describe('valid data', function(){
        it(`Don't have the @ or @ the first character`, function(){
            assert.isFalse(validateEmail('emailgmail.com'), `Don't have the @`);
            assert.isFalse(validateEmail('@emailgmail.com'), `@ the first character`);
           
        });
        it(`Don't have 2 or more @`, function() {
            assert.equal(validateEmail('email@gmail.com'), true);
        })
        
    })
})