import Item from "../../../core/domain/item/Item.ts";
import { ItemRepository } from "../../../core/domain/item/repository.ts";

type ItemId = number;
type Quantity = number;

export default class DependencyCalculator {
  constructor(private itemRepo: ItemRepository) {}

  public execute(item_id: number, quantity: number) {
    const item: Item = this.itemRepo.read_item(item_id);

    const empty_cache = new Map<ItemId, Map<ItemId, Quantity>>();
    const dependencies: Map<ItemId, Map<ItemId, Quantity>> =
      calculateDependency(
        item,
        empty_cache,
      );
  }

  private calculateDependency(
    item: Item,
    cache: Map<ItemId, Map<ItemId, Quantity>>,
  ): Map<ItemId, Map<ItemId, Quantity>> {
    const new_cache = new Map(cache);
  }
}
