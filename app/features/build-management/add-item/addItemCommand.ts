import Build from "../../../core/domain/build/Build.ts";

export default class addItemCommand {
  private build: Build;

  constructor(build: Build) {
    this.build = build;
  }

  public execute(item_id: number, quantity: number): boolean {
    return this.build.add_item(item_id, quantity);
  }
}
