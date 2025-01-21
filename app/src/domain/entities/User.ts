export default interface User {
  id: number;
  user_name: string;
  builds: Set<number>;
}
