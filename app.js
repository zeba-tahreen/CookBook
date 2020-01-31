const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const users = require('./routes/api/users');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// passport middleware
app.use(passport.initialize());
// passport config
require('./config/passport')(passport);
// routes
app.use('/api/users', users);


const db = require("./config/keys").mongoURI;

mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log("CookBook Database is connected"))
    .catch(err => console.log(err));

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Server is running on port ${port} 🌎 !!`));