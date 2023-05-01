class Intern {

    //sets constructor
    constructor(name, id, email, school) {
        
        //throws error if invalid data
        if ((!name) || (!id) || (!email) || (!school)) {
            throw new Error('Must have all information for Intern')
        }

        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
    }
}

module.exports = Intern;