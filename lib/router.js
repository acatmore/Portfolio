
FlowRouter.route('/', {
	action: function() {
		BlazeLayout.render('layout', {top: "navigation", footer: "footer"});
	},
	name: 'home'
});

FlowRouter.route('/portfolio/blocJams', {
	action: function() {
		BlazeLayout.render('layout', {top: "navigation", main: "blocJams", footer: "footer"});
	},
	name: 'blocJams'
});

FlowRouter.route('/portfolio/railvolution', {
	action: function() {
		BlazeLayout.render('layout', {top: "navigation", main: "railvolution", footer: "footer"});
	},
	name: 'railvolution'
});

FlowRouter.route('/portfolio/fourwalla', {
	action: function() {
		BlazeLayout.render('layout', {top: "navigation", main: "fourwalla", footer: "footer"});
	},
	name: 'fourwalla'
});

FlowRouter.route('/about', {
	action: function() {
		BlazeLayout.render('layout', {top: "navigation", main: "about", footer: "footer"});
	},
	name: 'about'
});

FlowRouter.route('/contact', {
	action: function() {
		BlazeLayout.render('layout', {top: "navigation", main: "footer"});
	},
	name: 'contact'
});

