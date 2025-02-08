export default interface Builder {
  id: number;
  user_name: string;
  builds: Set<number>;
}
