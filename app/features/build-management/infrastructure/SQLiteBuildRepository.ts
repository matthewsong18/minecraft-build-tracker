import Build from "../../../core/domain/build/Build.ts";
import { BuildRepository } from "../../../core/domain/build/repository.ts";

export default class SQLiteBuildRepository implements BuildRepository {
  create(build_name: string): Build {
    throw new Error("Method not implemented.");
  }
  save(build: Build): boolean {
    throw new Error("Method not implemented.");
  }
  load(build_id: number): Build | undefined {
    throw new Error("Method not implemented.");
  }
  delete(build_id: number): boolean {
    throw new Error("Method not implemented.");
  }
}
