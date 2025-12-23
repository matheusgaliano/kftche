import User from "../models/User.js";

class UserController {
  async store(request, response) {
    const user = {
      id: v4(),
      name: "Matheus Gali",
      email: "matheusinho@example.com",
      password_hash: "31319494",
      admin: false,
    };
    await User.create(user);

    res.status(201).json(user);
  }
}

export default new UserController();
