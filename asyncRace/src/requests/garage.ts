import { ICar, ICars } from '../models/garage.model';

class Garage {
  url: string;

  constructor() {
    this.url = 'http://127.0.0.1:3000/garage';
  }

  async getAll(page: number, limit = 7): Promise<ICars> {
    const response = await fetch(`${this.url}?_page=${page}&_limit=${limit}`);
    return {
      data: await response.json(),
      count: Number(response.headers.get('X-Total-Count')),
    };
  }

  async get(id: number): Promise<ICar> {
    const response = await fetch(`${this.url}/${id}`);
    return response.json();
  }

  async create(body: Omit<ICar, 'id'>): Promise<ICar> {
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

  async update(id: number, body: Omit<ICar, 'id'>): Promise<ICar> {
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

export default new Garage();
