const Engineer = require('../Employee-Build/Engineer-Build');

//tests to check that it works if user input valid and invalid data
describe ('Engineer', () => {
    describe ('test constructor', () => {
        it ('should throw if input is incorrect', () => {
            const A = () => new Engineer('ted', '91', 'bob')
            expect(A).toThrow()
        })
        it ('should pass if correct', () => {
            const A = () => new Engineer('ted', '91', 'NONE@SPAM.com', 'ted91')
            expect(A).not.toThrow()
        })
    })
});