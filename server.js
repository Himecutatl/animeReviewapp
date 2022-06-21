const express = require('express');
const path = require('path');
const logger = require('morgan');
var methodOverride = require('method-override')
const PORT = 4001
var bodyParser = require('body-parser')
//var port = normalizePort(process.env.PORT || '3000');
require('dotenv').config();

require('./config/database');

const animeRouter = require('./routes/anime');
const reviewRouter = require('./routes/reviews');

const app = express();

//API
const axios = require("axios");


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(methodOverride('_method'))


//Middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', animeRouter);
console.log('check 2')
app.use('/details/', reviewRouter);
console.log('check 3')



// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

app.listen(4001, () => {
    console.log(`✅ PORT: ${PORT} 🌟`);
})

// module.exports = app;