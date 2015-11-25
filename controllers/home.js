module.exports = function(app) {
	var HomeController = {
		index: function(req, res) {
			res.render('home/index');
		},
		login: function(req, res) {
			if(req.body.user) {
				var user = req.body.user;
				req.session.user = user;
				res.redirect('/contacts');
			} else {
				res.redirect('/');
			}
		},
		logout: function(req, res) {
			req.session.destroy();
			res.redirect('/');
		}
	};
	return HomeController;
};