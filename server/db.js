const Pool = require('pg').Pool

const pool = new Pool({
	// user: 'your user name',
	// password: 'your password',
	host: 'localhost',
	port: 5432,
	// database: 'your database'
})

module.exports = pool