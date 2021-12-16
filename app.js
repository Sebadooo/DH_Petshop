const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const app = express();
const methodOverride = require('method-override');

//************ ROUTES ***********//
var indexRouter = require('./routes/homeRouters');
var usersRouter = require('./routes/usersRouters');
var productsRouter = require('./routes/productsRouters');

//********** VIEW ENGINE SETUP **********//
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//********** MIDLLEWARES **********//
app.use(methodOverride('_method'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//********** ARCHIVOS PUBLICOS **********//
app.use(express.static(path.join(__dirname, 'public')));

//********** USANDO RUTAS **********//
app.use('/products', productsRouter);
app.use('/', indexRouter);
app.use('/users', usersRouter);

//********** ERROR 404 AND FORWARD **********//
app.use(function(req, res, next) {
    next(createError(404));
});

//********** ERROR HANDLER **********//
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    //********** RENDER THE ERROR PAGE **********//
    //res.status(err.status || 500);
    //res.render('error');
});

module.exports = app;