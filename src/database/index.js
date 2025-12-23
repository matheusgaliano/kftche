import { Sequelize } from "sequelize";
import databaseConfig from "../config/database.cjs";
import User from "../app/models/User.js";

const models = [User];

class Database {
  constructor() {
    this.Init = null;
  }
  init() {
    this.connection = new Sequelize();
    models.map((model) => model.init(this.connection));
  }
}

export default new Database();
