import { IEngineClient, IMovement } from '../models/engine.model';

class Engine implements IEngineClient {
  private url: string;

  constructor() {
    this.url = 'http://127.0.0.1:3000/engine';
  }

  public async control(
    id: number,
    status: 'started' | 'stopped'
  ): Promise<IMovement> {
    const response = await fetch(`${this.url}?id=${id}&status=${status}`, {
      method: 'PATCH',
    });
    return response.json();
  }

  public async switch(
    id: number,
    status: 'drive',
    signal: AbortSignal
  ): Promise<{ success: boolean }> {
    try {
      const response = await fetch(`${this.url}?id=${id}&status=${status}`, {
        method: 'PATCH',
        signal,
      });
      return await response.json();
    } catch {
      return { success: false };
    }
  }
}

export default new Engine();
