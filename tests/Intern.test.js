const Intern = require('../Employee-Build/Intern-Build');

//tests to check that it works if user input valid and invalid data
describe ('Intern', () => {
    describe ('test constructor', () => {
        it ('should throw if input is incorrect', () => {
            const A = () => new Intern('bill', '50', 'ETBU')
            expect(A).toThrow()
        })
        it ('should pass if correct', () => {
            const A = () => new Intern('bill', '50', 'NONE@SPAM.com', 'ETBU')
            expect(A).not.toThrow()
        })
    })
});