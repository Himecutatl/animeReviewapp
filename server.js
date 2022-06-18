const express = require('express');
const path = require('path');
const logger = require('morgan');
var methodOverride = require('method-override')
const PORT = 4005
//var port = normalizePort(process.env.PORT || '3000');
require('dotenv').config();

require('./config/database');
const indexRouter = require('./routes/index');
const animeRouter = require('./routes/anime');
const reviewRouter = require('./routes/reviews');

const app = express();

//API
const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://jikan1.p.rapidapi.com/search/anime',
  params: {q: 'Fate/Zero'},
  headers: {
    'X-RapidAPI-Key': 'd1cdc717d3mshc064114f2aa93acp1c805ajsn0c9639b85718',
    'X-RapidAPI-Host': 'jikan1.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});


const APIKey = "d1cdc717d3mshc064114f2aa93acp1c805ajsn0c9639b85718"


//ALL MY RENDER RES ARE FAILING FUCK
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(methodOverride('_method'))


//Middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
console.log('check 1')
app.use('/anime', animeRouter);
console.log('check 2')
app.use('/anime/:id/reviews', reviewRouter);
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