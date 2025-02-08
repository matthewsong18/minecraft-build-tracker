import Build from "./Build.ts";

export interface BuildRepository {
  create(build_name: string): Build;

  save(build: Build): boolean;

  load(build_id: number): Build | undefined;

  delete(build_id: number): boolean;
}
