module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: 'localhost',
      port: 5432,
      database: 'ale_db',
      user: 'postgres',
      password: 'postgres',
      ssl: false,
    },
  },
});