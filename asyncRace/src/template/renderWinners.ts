import { IWinnerFull } from '../models/winner.model';

export default (winners: IWinnerFull[], page: number) => {
  const limit = 10;
  return `
  ${winners
    .map(
      ({ name, color, wins, time }: IWinnerFull, i) => `
      <tr>
        <td>${(page - 1) * limit + (i + 1)}</td>
        <td>
          <div class="car-win">
          <svg class="car" style="fill: ${color}" width="70">
            <use href="#car" width="50" height="30"></use>
          </svg>
          </div>
        </td>
        <td>${name}</td>
        <td class="colum-wins">${wins}</td>
        <td>${time}</td>
      </tr>
      `
    )
    .join('')}
  `;
};
