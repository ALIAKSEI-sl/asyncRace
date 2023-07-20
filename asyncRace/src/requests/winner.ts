import {
  IWinner,
  IWinnerClient,
  IWinners,
  Order,
  Sort,
} from '../models/winner.model';

class Winner implements IWinnerClient {
  private url: string;

  private limitWinner;

  constructor() {
    this.url = 'http://127.0.0.1:3000/winners';
    this.limitWinner = 10;
  }

  public async getAll(
    page: number,
    limit = this.limitWinner,
    sort: Sort = 'id',
    order: Order = 'ASC'
  ): Promise<IWinners> {
    const response = await fetch(
      `${this.url}?_page=${page}&_limit=${limit}&_sort=${sort}&_order=${order}`
    );
    return {
      data: await response.json(),
      count: Number(response.headers.get('X-Total-Count')),
    };
  }

  public async get(id: number): Promise<IWinner | null> {
    const response = await fetch(`${this.url}/${id}`);
    if (response.status === 404) return null;
    return response.json();
  }

  public async create(body: IWinner): Promise<IWinner> {
    const response = await fetch(this.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    return response.json();
  }

  public async remove(id: number): Promise<void> {
    await fetch(`${this.url}/${id}`, { method: 'DELETE' });
  }

  public async update(id: number, body: Omit<IWinner, 'id'>): Promise<IWinner> {
    const response = await fetch(`${this.url}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    return response.json();
  }
}

export default new Winner();
