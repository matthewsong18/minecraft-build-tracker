import Build from "../../../core/domain/build/Build.ts";
import { BuildRepository } from "../../../core/domain/build/repository.ts";

export default class InMemoryBuildRepository implements BuildRepository {
  private build_list = new Map<number, Build>();

  create(build_name: string): Build {
    const new_id = this.build_list.size + 1;
    const build: Build = new Build(new_id, build_name);

    this.build_list.set(new_id, build);
    return build;
  }

  save(build: Build): boolean {
    this.build_list.set(build.id, build);
    return true;
  }

  load(build_id: number): Build | undefined {
    return this.build_list.get(build_id);
  }

  delete(build_id: number): boolean {
    return this.build_list.delete(build_id);
  }
}
