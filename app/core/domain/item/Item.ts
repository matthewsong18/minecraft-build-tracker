type ItemId = number;
type Quantity = number;

export default class Item {
  id: ItemId;
  item_name: string;
  components: Map<ItemId, Quantity>;

  constructor(id: ItemId, item_name: string) {
    this.id = id;
    this.item_name = item_name;
    this.components = new Map<ItemId, Quantity>();
  }

  // components CRUD
  public add_component(item_id: ItemId, quantity: Quantity): boolean {
    if (!this.validateAdd(item_id, quantity)) {
      return false;
    }

    this.components.set(item_id, quantity);
    return true;
  }

  private validateAdd(item_id: number, quantity: number) {
    const nullValues: boolean = item_id == null || quantity == null;
    if (nullValues) return false;

    const itemExists: boolean = this.components.has(item_id);
    if (itemExists) return false;

    const invalidQuantity = quantity <= 0;
    if (invalidQuantity) return false;

    return true;
  }

  public get_components(): Map<ItemId, Quantity> {
    return this.components;
  }

  public update_components(item_id: ItemId, quantity: Quantity): boolean {
    if (!this.validateUpdate(item_id, quantity)) return false;

    this.components.set(item_id, quantity);
    return true;
  }

  private validateUpdate(item_id: ItemId, quantity: Quantity): boolean {
    const nullValues: boolean = item_id == null || quantity == null;
    if (nullValues) return false;

    const missingItemId: boolean = !this.components.has(item_id);
    if (missingItemId) return false;

    const validQuantity: boolean = quantity <= 0;
    if (!validQuantity) return false;

    return true;
  }

  public delete_component(item_id: ItemId): boolean {
    return this.components.delete(item_id);
  }
}
