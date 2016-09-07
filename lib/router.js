
Router.route('/', function() {
	this.layout('layout');

	this.render('navigation', {to: 'header'});
	this.render('myName', {to: 'mainContent'});
});

Router.route('/portfolio/blocJams', function() {
	this.layout('layout');

	this.render('navigation', {to: 'header'});
	this.render('blocJams', {to: 'mainContent'});
});

Router.route('/portfolio/railvolution', function() {
	this.layout('layout');

	this.render('navigation', {to: 'header'});
	this.render('railvolution', {to: 'mainContent'});
});

Router.route('portfolio/fourwalla', function() {
	this.layout('layout');

	this.render('navigation', {to: 'header'});
	this.render('fourwalla', {to: 'mainContent'});
});

// Router.route('/about', function() {
// 	this.render('about');
// });

// Router.route('/blog', function() {
// 	this.render('blog');
// });
