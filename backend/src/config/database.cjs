module.exports = {
  dialect: "postgres",
  host: "127.0.0.1",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "kftche-api-db",
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
