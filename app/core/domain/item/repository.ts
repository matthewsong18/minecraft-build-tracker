import Item from "./Item.ts";
import Source from "./Source.ts";

export interface ItemRepository {
  create_item(item_name: string): Item;

  read_item(item_id: number): Item;

  update_item(item: Item): void;

  delete_item(item_id: number): void;
}

export interface SourceRepository {
  create_source(source_name: string): Source;

  read_source(source_id: number): Source;

  update_source(source: Source): void;

  delete_source(source_id: number): void;
}
