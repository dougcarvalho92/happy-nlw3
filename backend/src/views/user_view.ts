import User from "../models/User";
import imagesView from "./images.view";

export default {
  render(user: User) {
    return {
      id: user.id,
      email: user.email,
    };
  },
  renderMany(users: User[]) {
    return users.map((user) => this.render(users));
  },
};
