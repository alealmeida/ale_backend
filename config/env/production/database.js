// module.exports = ({ env }) => ({
//   connection: {
//     client: 'postgres',
//     connection: {
//       host: env('DATABASE_HOST', 'localhost'),
//       port: env.int('DATABASE_PORT', 5432),
//       database: env('DATABASE_NAME', 'ale_db'),
//       user: env('DATABASE_USERNAME', 'postgres'),
//       password: env('DATABASE_PASSWORD', 'postgres'),
//       ssl: env.bool('DATABASE_SSL', false),
//     },
//   },
// });
// module.exports = ({ env }) => ({
//   connection: {
//     client: 'postgres',
//     connection: {
//       host: env('DATABASE_HOST', 'db-postgresql-nyc3-77026-do-user-10543460-0.b.db.ondigitalocean.com'),
//       port: env.int('DATABASE_PORT', 25060),
//       database: env('DATABASE_NAME', 'defaultdb'),
//       user: env('DATABASE_USERNAME', 'doadmin'),
//       password: env('DATABASE_PASSWORD', 'o27SjujWfibd6mmp'),
//       ssl: env.bool('DATABASE_SSL', true),
//     },
//   },
// });
const parse = require('pg-connection-string').parse;
const config = parse(process.env.DATABASE_URL);

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: config.host,
      port: config.port,
      database: config.database,
      user: config.user,
      password: config.password,
      ssl: {
        rejectUnauthorized: false
      },
    },
    debug: false,
  },
});

// postgres://ebitxebvixeeqd:dc59b16dedb3a1eef84d4999sb4baf@ec2-50-37-231-192.compute-2.amazonaws.com: 5432/d516fp1u21ph7b.

// (This url is read like so: *postgres:// USERNAME : PASSWORD @ HOST : PORT / DATABASE_NAME*)