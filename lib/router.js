
FlowRouter.route('/', {
	action: function() {
		BlazeLayout.render('layout', {top: "navigation", main: "myName"});
	},
	name: 'home'
});

FlowRouter.route('/portfolio/blocJams', {
	action: function() {
		BlazeLayout.render('layout', {top: "navigation", main: "blocJams"});
	},
	name: 'blocJams'
});

FlowRouter.route('/portfolio/railvolution', {
	action: function() {
		BlazeLayout.render('layout', {top: "navigation", main: "railvolution"});
	},
	name: 'railvolution'
});

FlowRouter.route('/portfolio/fourwalla', {
	action: function() {
		BlazeLayout.render('layout', {top: "navigation", main: "fourwalla"});
	},
	name: 'fourwalla'
});

// Router.route('/about', function() {
// 	this.render('about');
// });

// Router.route('/blog', function() {
// 	this.render('blog');
// });
