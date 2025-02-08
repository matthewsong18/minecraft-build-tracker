import { ItemRepository } from "../item/repository.ts";
import { BuildRepository } from "./repository.ts";
import Build from "./Build.ts";

type ItemId = number;
type Quantity = number;

export default class BuildService {
  constructor(
    private buildRepo: BuildRepository,
    private itemRepo: ItemRepository,
  ) {}

  // TO calculate the total build requirements...
  // - Keep track of the current total items
  // - Keep track of already calculated item recipes
  // - Build item recipe cache by calculating each unique item's requirements
  // - Build total requirements from item recipe cache
  calculate_total_build_requirements(build_id: number) {
    const build: Build | undefined = this.buildRepo.load(build_id);
    if (build == null) return false;

    const build_items = build.get_items();
    const unique_items: Set<ItemId> = this._get_unique_items(build_items);
    const empty_cache = new Map<ItemId, Map<ItemId, Quantity>>();
    const item_recipe_cache: Map<ItemId, Map<ItemId, Quantity>> = this
      ._calculate_item_recipe_cache(unique_items, empty_cache);

    const total_items_list: Map<ItemId, Quantity> = this
      ._calculate_item_requirements(build_items, item_recipe_cache);
  }

  // TO get all the unique items...
  // - Build a set from the map's item
  private _get_unique_items(
    total_items_list: Map<ItemId, Quantity>,
  ): Set<ItemId> {
    return new Set(total_items_list.keys());
  }

  private _calculate_item_recipe_cache(
    unique_items: Set<number>,
    empty_cache: Map<number, Map<number, number>>,
  ): Map<number, Map<number, number>> {
    throw new Error("Method not implemented.");
  }

  private _calculate_item_requirements(
    build_items: Map<ItemId, Quantity>,
    item_recipe_cache: Map<ItemId, Map<ItemId, Quantity>>,
  ): Map<ItemId, Quantity> {
    throw new Error("Method not implemented.");
  }
}
