import { IMovement } from '../models/engine.model';

class Engine {
  url: string;

  constructor() {
    this.url = 'http://127.0.0.1:3000/engine';
  }

  async control(id: number, status: 'started' | 'stopped'): Promise<IMovement> {
    const response = await fetch(`${this.url}?id=${id}&status=${status}`, {
      method: 'PATCH',
    });
    return response.json();
  }

  async switch(id: number, status: 'drive'): Promise<{ success: boolean }> {
    try {
      const response = await fetch(`${this.url}?id=${id}&status=${status}`, {
        method: 'PATCH',
      });
      return await response.json();
    } catch {
      return { success: false };
    }
  }
}

export default new Engine();
