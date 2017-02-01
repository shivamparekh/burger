// orm

var orm = require('../config/orm');

//

var burger = {

	selectAll: function(callback) {

		orm.selectAll('burgers', function(res) {

			callback(res);

		})
	},

	insertOne: function(cols, vals, callback) {

		orm.insertOne('burgers', cols, vals, function(res) {

			callback(results);

		})
	},

	updateOne: function(objColVals, condition, callback) {

		orm.updateOne('burgers', objColVals, condition, function(res) {

			callback(results);
		})
	}

}

module.exports = burger;