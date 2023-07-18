export type Sort = 'id' | 'wins' | 'time';

export type Order = 'ASC' | 'DESC';

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
