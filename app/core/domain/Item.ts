export default interface Item {
  id: number;
  item_name: string;
  components?: Map<number, number>; // <ItemID, Quantity>
}
