const Manager = require('../Employee-Build/Manager-Build');

//tests to check that it works if user input valid and invalid data
describe('Manager', () => {
    describe('test constructor', () => {
        it ('Should throw an error if input is incorrect', () => {
            const A = () => new Manager('bob', '69', 'NONE@SPAM.com')
            expect(A).toThrow();
        })
        it ('Shouldnt throw if all inputs are correct', () => {
            const A = () => new Manager('bob', '69', 'NONE@SPAM.com', '69')
            expect(A).not.toThrow();
        })
    })
});