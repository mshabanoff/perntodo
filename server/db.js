const Pool = require('pg').Pool

const pool = new Pool({
	user: 'postgres',
	password: 'M1a2i3s4_2003',
	host: 'localhost',
	port: 5432,
	database: 'perntodo'
})

module.exports = pool