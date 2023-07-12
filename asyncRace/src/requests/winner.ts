import { IWinner, IWinners, Order, Sort } from '../models/winner.model';

class Winner {
  url: string;

  constructor() {
    this.url = 'http://127.0.0.1:3000/winners';
  }

  async getAll(
    page: number,
    limit = 10,
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

  async get(id: number): Promise<IWinner> {
    const response = await fetch(`${this.url}/${id}`);
    return response.json();
  }

  async create(body: IWinner): Promise<IWinner> {
    const response = await fetch(this.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    return response.json();
  }

  async remove(id: number): Promise<void> {
    await fetch(`${this.url}/${id}`, { method: 'DELETE' });
  }

  async update(id: number, body: Omit<IWinner, 'id'>): Promise<IWinner> {
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
