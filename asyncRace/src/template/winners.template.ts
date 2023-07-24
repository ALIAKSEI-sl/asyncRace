import { IWinnerFull } from '../models/winner.model';
import renderWinners from './renderWinners';

export default (
  countWinners: number,
  pageWinners: number,
  winners: IWinnerFull[]
) => `
  <h1 class="header">Winners (${countWinners})</h1>
  <h2 class="header-page">Page #(${pageWinners})</h2>
  <table class="table-win">
    <thead>
      <tr>
        <th>Number</th>
        <th>Car</th>
        <th>Name</th>
        <th class="number-wins colum-wins">Wins <span id="wins"></span></th>
        <th class="record-column">Best time (seconds) <span id="time"></span></th>
      </tr>
    </thead>
    <tbody>
    ${renderWinners(winners, pageWinners)}
    </tbody>
  </table>
  <div class="pagination">
    <button class="button prev-btn-winner" id='prev-winner' disabled>Previous page</button>
    <button class="button next-btn-winner" id='prev-winner' disabled>Next page</button>
  </div>
`;
