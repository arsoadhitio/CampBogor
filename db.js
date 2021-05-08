const Pool = require("pg").Pool;

const pool = new Pool ({
    user: "zeywtdsx",
    password: "oIokSkXUBxOTL7p4K-zQ4OTzZFlpjVhP",
    database: "zeywtdsx",
    host: "rosie.db.elephantsql.com",
    port: 5432
});

module.exports = pool;