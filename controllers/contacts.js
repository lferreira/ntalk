module.exports = function(app) {
	var ContatoController = {
		index: function(req, res) {
			var user = req.session.user
			, contacts = user.contacts
			, params = {user: user, contacts: contacts};
			res.render('contacts/index', params);
		},
		show: function(req, res) {

		},
		create: function(req, res) {
			
		},
		edit: function(req, res) {

		},
		update: function(req, res) {

		},
		destroy: function(req, res) {

		}
	}
	return ContatoController;
};