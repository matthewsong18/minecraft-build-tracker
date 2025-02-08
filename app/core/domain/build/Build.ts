export default class Build {
  id: number;
  build_name: string;
  builders: Set<number>;
  items: Map<number, number>;

  constructor(
    id: number,
    build_name: string,
  ) {
    this.id = id;
    this.build_name = build_name;

    this.builders = new Set<number>();
    this.items = new Map<number, number>();
  }

  // build name
  update_build_name(build_name: string): boolean {
    if (build_name == null) return false;
    this.build_name = build_name;
    return true;
  }

  // builders CRUD
  add_builder(builder_id: number): boolean {
    if (builder_id == null || this.builders.has(builder_id)) return false;
    this.builders.add(builder_id);
    return true;
  }

  get_builders(): Set<number> {
    return this.builders;
  }

  delete_builder(builder_id: number): boolean {
    if (builder_id == null || this.builders.size == 1) return false;
    return this.builders.delete(builder_id);
  }

  // items CRUD
  add_item(item_id: number, quantity: number): boolean {
    if (item_id == null || quantity == null) {
      return false;
    }

    if (this.items.has(item_id)) {
      let old_quantity = this.items.get(item_id);
      if (old_quantity == null) old_quantity = 0;
      this.items.set(item_id, quantity + old_quantity);
      return true;
    }

    this.items.set(item_id, quantity);
    return true;
  }

  get_items(): Map<number, number> {
    return this.items;
  }

  delete_item(item_id: number): boolean {
    return this.items.delete(item_id);
  }
}
