export default interface Build {
  id: number;
  build_name: string;
  builders: Set<number>;
  items: Map<number, number>;
}
