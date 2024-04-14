import mysql from 'mysql2/promise'

import { executeQueries, readQueries } from './queryUtils';

const conn = mysql.createPool({
  host: process.env.MYSQLHOST,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  port: Number(process.env.MYSQLPORT || 3006 )
})


if ([ 'dev', 'development' ].includes(process.env.NODE_ENV || 'development')) {
  console.log('Creating database');  
  const dropQuery = readQueries('dropDatabase.sql');
    executeQueries(conn, dropQuery).then(() =>
      executeQueries(conn)
    );
  console.log('Database created');
}

export default conn