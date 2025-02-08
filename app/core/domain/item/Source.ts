import Coordinate from "./Coordinate.ts";

export default class Source {
  id: number;
  source_name: string;
  items: Set<number>;
  warp_command: string;

  private _coordinate?: Coordinate | undefined;

  constructor(
    id: number,
    source_name: string,
    warp_command: string,
  ) {
    this.id = id;
    this.source_name = source_name;
    this.warp_command = warp_command;

    this.items = new Set<number>();
  }

  public update_warp_command(warp_command: string) {
    this.warp_command = warp_command;
  }

  public add_item(item_id: number): boolean {
    if (item_id == null || this.items.has(item_id)) return false;

    this.items.add(item_id);
    return true;
  }

  public get coordinate(): Coordinate | undefined {
    return this._coordinate;
  }
  public set coordinate(value: Coordinate | undefined) {
    this._coordinate = value;
  }
}
