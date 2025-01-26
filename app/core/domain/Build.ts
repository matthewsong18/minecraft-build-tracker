export default class Build {
  id: number;
  build_name: string;
  builders: Set<number>;
  items: Map<number, number>;

  constructor(
    id: number,
    build_name: string,
    builders?: Set<number>,
    items?: Map<number, number>,
  ) {
    this.id = id;
    this.build_name = build_name;

    if (builders == null) {
      this.builders = new Set<number>();
    } else {
      this.builders = builders;
    }

    if (items == null) {
      this.items = new Map<number, number>();
    } else {
      this.items = items;
    }
  }

  add_builder(user_id: number): void {
    this.builders.add(user_id);
  }

  get_builders(): Set<number> {
    return this.builders;
  }

  update_builders(builders: Set<number>): void {
    this.builders = builders;
  }

  delete_builder(user_id: number): boolean {
    return this.builders.delete(user_id);
  }

  add_item(item_id: number, quantity: number): void {
    this.items.set(item_id, quantity);
  }

  get_items(): Map<number, number> {
    return this.items;
  }

  update_items(items: Map<number, number>): void {
    this.items = items;
  }

  delete_item(item_id: number): boolean {
    return this.items.delete(item_id);
  }
}
