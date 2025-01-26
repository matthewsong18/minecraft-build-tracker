import User from "../entities/User.ts";

export default interface UserRepository {
  create_user(user_name: string): User;

  read_user(user_id: number): User;

  update_user(user: User): void;

  delete_user(user_id: number): void;
}
