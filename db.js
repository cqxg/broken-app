const Sequelize = require('sequelize');
//database username   password
const sequelize = new Sequelize('gamedb', 'postgres', '1337', {
    host: 'localhost',
    dialect: 'postgres',
    port: 5433,
    loging: false,
})

sequelize.authenticate().then(
    function success() {
        console.log("Connected to DB");
    },

    function fail(err) {
        console.log(`Error: ${err}`);
    }
)

module.exports = sequelize;
