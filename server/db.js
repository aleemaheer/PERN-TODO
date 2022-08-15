const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    password: 'htgrj8r1',
    host: 'aleemaheer',
    port: 5432,
    database: 'perntodo'
})

module.exports = pool;