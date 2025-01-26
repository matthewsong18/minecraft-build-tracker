import Build from "../entities/Build.ts";

export default interface BuildRepository {
  create_build(build_name: string): Build;

  read_build(build_id: number): Build;

  update_build(build: Build): void;

  delete_build(build_id: number): void;
}
