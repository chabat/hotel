Router.route('/', function () {
  this.render('Home');
});

Router.route('/index.html', function () {
  this.render('Home');
});

Router.route('/about.html', function () {
  this.render('About');
});

Router.route('/contact.html', function () {
  this.render('Contact');
});

Router.route('/reservation.html', function () {
  this.render('Reservation');
});

Router.route('/signin.html', function () {
  this.render('Signin');
});

Router.route('/signup.html', function () {
  this.render('Signup');
});
