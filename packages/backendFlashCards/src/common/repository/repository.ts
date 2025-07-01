export interface Repository<Model> {
  getAll(): Promise<Model[]>;
  getById(id: string): Promise<Model | null>;
  create(item: Model): Promise<Model>;
  update(id: string, item: Model): Promise<Model | null>;
  delete(id: string): Promise<void>;
}

export interface PaginatedRepository<Model> {
  getAllPaginated(
    page: number,
    limit: number
  ): Promise<{ items: Model[]; total: number }>;
}

export interface SearchableRepository<Model> {
  search(
    query: string,
    page: number,
    limit: number
  ): Promise<{ items: Model[]; total: number }>;
  searchByField(
    field: string,
    query: string,
    page: number,
    limit: number
  ): Promise<{ items: Model[]; total: number }>;
}
