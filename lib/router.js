Router.route('/', {
	name: 'home',
	template: 'layout'
});

// Router.route('/portfolio', {
// 	name: 'portfolio',
// 	template: 'layout2'
// });

Router.route('/portfolio/blocJams', {
	name: 'blocJams',
	template: 'blocJams'
});

Router.route('/portfolio/railvolution', {
	name: 'railvolution',
	template: 'railvolution'
});

Router.route('portfolio/fourwalla', {
	name: 'fourwalla',
	template: 'fourwalla'
})

// Router.route('/about', function() {
// 	this.render('about');
// });

// Router.route('/blog', function() {
// 	this.render('blog');
// });
