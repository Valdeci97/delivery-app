require('dotenv').config();

const env = process.env.NODE_ENV;

const environment = env.length > 0 ? env : "test";

const suffix = {
  prod: "",
  production: "",
  dev: "-dev",
  development: "-dev",
  test: "-test",
};

const options = {
  host: process.env.MYSQL_HOST || 'db',
  port: process.env.MYSQL_PORT || '',
  database: 
    `${process.env.MYSQL_DB_NAME || 'deliveryapp'}${suffix[environment]}`,
  username: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || 'docker',
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: false,
};

module.exports = {
  development: {
    ...options,
  },
  test: {
    ...options,
  },
  production: {
    ...options,
  },
};
