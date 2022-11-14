// setup database here, change the values to suit your environment
module.exports = {
  HOST: "127.0.0.1",
  USER: "root",
  PASSWORD: "MySQL123",
  DB: "challenge_8",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
