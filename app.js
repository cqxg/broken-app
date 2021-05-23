const express = require('express');
const app = express();
const db = require('./db');
const user = require('./controllers/usercontroller');
const game = require('./controllers/gamecontroller')

db.sync().then(() => {
    app.listen(4000, function () {
        console.log("App is listening on 4000");
    })
}).catch(err => console.log(err));

app.use(express.json());
app.use('/api/auth', user);
app.use(require('./middleware/validate-session'));
app.use('/api/game', game);
