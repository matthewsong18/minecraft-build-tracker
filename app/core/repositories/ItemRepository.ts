import Item from "../entities/Item.ts";

export default interface ItemRepository {
  create_item(item_name: string): Item;

  read_item(item_id: number): Item;

  update_item(item: Item): void;

  delete_item(item_id: number): void;
}
