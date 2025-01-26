import Coordinate from "./Coordinate.ts";

export default interface Source {
  id: number;
  source_name: string;
  items: Set<number>;
  location: Coordinate;
  warp_command: string;
}
