Router.route('/', function() {
	this.render('portfolio');
});

Router.route('/about', function() {
	this.render('about');
});

Router.route('/contact', function() {
	this.render('contact');
});
