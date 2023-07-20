export interface IGarageClient {
  getAll(page: number, limit?: number): Promise<ICars>;
  get(id: number): Promise<ICar>;
  create(body: Omit<ICar, 'id'>): Promise<ICar>;
  remove(id: number): Promise<void>;
  update(id: number, body: Omit<ICar, 'id'>): Promise<ICar>;
}

export interface ICars {
  data: ICar[];
  count: number;
}

export interface ICar {
  name: string;
  color: string;
  id: number;
}
