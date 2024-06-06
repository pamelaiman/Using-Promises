const { Pool } = require("pg");
const dotenv = require("dotenv");
dotenv.config();

/**
 *Makes a pool of connections to the named database.  it is assumed the db is on localhost.
 * @param {string} dbName name of database to connect to
 */
function makeDBConnectionPool(SupaBase1) {
  //Understanding the details is not important here.

  return new Pool({
    connectionString: process.env.DATABASE_URL,
  });
}

module.exports = { makeDBConnectionPool };
