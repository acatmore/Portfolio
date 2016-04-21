// HomeController=MainController.extend({
// 	template:"home"
// });

Router.route('/', function() {
	// $('body').addClass('showBackground');
	// $("body").css("background-image","url('https://s3-us-west-2.amazonaws.com/acatmoreimages/background/road-sunset.jpeg')");
	$("body").css("background-position", "center center");
	$("body").css("background", "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6) ), url('https://s3-us-west-2.amazonaws.com/acatmoreimages/background/road-sunset.jpeg')");
	$("body").css("background-size", "cover");
	$("body").css("background-repeat", "no-repeat");
	$("body").css("background-attachment", "fixed");

	$("body").css("min-width", "1024px");
	$("body").css("min-height", "768px");
	this.render('portfolio');
});

Router.route('/about', function() {
	this.render('about');
});

// Router.route('/contact', function() {
// 	this.render('contact');
// });
