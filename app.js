var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session')

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(session({
  secret: 'senha123',
  resave: false,
  saveUninitialized: true
}))

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function adicionaUserNoRender(req, res, next) {

  res.locals.estaLogado = req.session.estaLogado
  res.locals.usuarioLogado = req.session.usuarioLogado
  next()
})

app.use('/', require('./routes/index'));
app.use('/produtos', require('./routes/produtos'))
app.use('/admin', require('./routes/admin'))

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
