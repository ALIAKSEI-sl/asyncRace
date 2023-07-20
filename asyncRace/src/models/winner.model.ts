export type Sort = 'id' | 'wins' | 'time';

export type Order = 'ASC' | 'DESC' | null;

export interface IWinners {
  data: IWinner[];
  count: number;
}

export interface IWinner {
  id: number;
  wins: number;
  time: number;
}

export interface IWinnerFull {
  id: number;
  wins: number;
  time: number;
  name: string;
  color: string;
}

export interface IWinnerClient {
  getAll(
    page: number,
    limit?: number,
    sort?: Sort,
    order?: Order
  ): Promise<IWinners>;
  get(id: number): Promise<IWinner | null>;
  create(body: IWinner): Promise<IWinner>;
  remove(id: number): Promise<void>;
  update(id: number, body: Omit<IWinner, 'id'>): Promise<IWinner>;
}
