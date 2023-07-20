import { IWinnerFull } from '../models/winner.model';
import carColor from './carColor';

export default (winners: IWinnerFull[]) => `
${winners
  .map(
    ({ name, color, wins, time }: IWinnerFull, i) => `
    <tr>
      <td>${i + 1}</td>
      <td>
        <div class="car-win">${carColor(color)}</div>
      </td>
      <td>${name}</td>
      <td class="colum-wins">${wins}</td>
      <td>${time}</td>
    </tr>
    `
  )
  .join('')}
`;
