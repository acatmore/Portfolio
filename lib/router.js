Router.route('/', function() {
	$("body").css("background-image","url('https://s3-us-west-2.amazonaws.com/acatmoreimages/background/road-sunset.jpeg')");
	$("body").css("background-position", "center center");
	$("body").css("background-size", "cover");
	$("body").css("background-repeat", "no-repeat");
	$("body").css("background-attachment", "fixed");
	// $("body").css("display", "flex");
	// $("body").css("flex-direction", "column");
	// $("body").css("margin-top", "175px");
	$("body").css("z-index", "1");
	$("body").css("min-width", "1024px");
	$("body").css("min-height", "768px");

	this.render('layout');
});

Router.route('/about', function() {
	this.render('about');
});

Router.route('/blog', function() {
	this.render('blog');
});

// Router.route('/contact', function() {
// 	this.render('contact');
// });
// Router.route('/alt', function() {
// 	$("body").css("background-image","url('https://s3-us-west-2.amazonaws.com/acatmoreimages/background/upwards-view.jpg')");
// 	$("body").css("background-size", "cover");
// 	$("body").css("position", "fixed");
// 	$("body").css("top", "0");
// 	$("body").css("left", "0");
// 	$("body").css("min-width", "100%");
// 	$("body").css("min-height", "100%");

// 	// $("header").css("background", "rgba(49, 215, 157, .7)");
// 	// $("header").css("padding", "5px");

// 	this.render('alt');
// })