var pg = require('pg');
var dbURL = process.env.DATABASE_URL || 'postgres://zjypqgerrudfne:ef7c31f98f0f25555fa4b45e2cde05925914851b1d3747680027dd9fd634864e@ec2-54-221-255-153.compute-1.amazonaws.com:5432/d4qg2c0q1d72d2';

pg.defaults.ssl = true;
pg.connect(dbURL, function(err, client) {
  if (err) throw err;
  console.log('Connected to postgres! Getting schemas...');

  client
    .query('SELECT table_schema,table_name FROM information_schema.tables;')
    .on('row', function(row) {
      console.log(JSON.stringify(row));
    });
});