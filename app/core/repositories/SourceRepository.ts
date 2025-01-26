import Source from "../entities/Source.ts";

export default interface SourceRepository {
  create_source(source_name: string): Source;

  read_source(source_id: number): Source;

  update_source(source: Source): void;

  delete_source(source_id: number): void;
}
