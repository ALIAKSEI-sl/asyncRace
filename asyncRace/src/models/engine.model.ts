export interface IMovement {
  velocity: number;
  distance: number;
}

export interface IEngineClient {
  control(id: number, status: 'started' | 'stopped'): Promise<IMovement>;
  switch(
    id: number,
    status: 'drive',
    signal: AbortSignal
  ): Promise<{ success: boolean }>;
}
