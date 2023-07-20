import { ICar, ICars, IGarageClient } from '../models/garage.model';

class Garage implements IGarageClient {
  private url;

  private limitCar;

  constructor() {
    this.url = 'http://127.0.0.1:3000/garage';
    this.limitCar = 7;
  }

  public async getAll(page: number, limit = this.limitCar): Promise<ICars> {
    const response = await fetch(`${this.url}?_page=${page}&_limit=${limit}`);
    return {
      data: await response.json(),
      count: Number(response.headers.get('X-Total-Count')),
    };
  }

  public async get(id: number): Promise<ICar> {
    const response = await fetch(`${this.url}/${id}`);
    return response.json();
  }

  public async create(body: Omit<ICar, 'id'>): Promise<ICar> {
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

  public async update(id: number, body: Omit<ICar, 'id'>): Promise<ICar> {
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
