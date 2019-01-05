let Country = require('./countryModel');


module.exports = class countryDAO {
    static getAllCountries(){
        return Country.find()
            .catch(() => error("err"));
    }
};