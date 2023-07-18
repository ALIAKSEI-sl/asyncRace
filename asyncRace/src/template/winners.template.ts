import { IStorageService } from '../models/store.model';
import renderWinners from './renderWinners';

export default (storage: IStorageService) => `
  <h1 class="header">Winners (${storage.countWinners})</h1>
  <h2 class="header-page">Page #(${storage.pageWinners})</h2>
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
    ${renderWinners(storage)}
    </tbody>
  </table>
  <div class="pagination">
    <button class="button prev-btn-winner" id='prev-winner' disabled>Previous page</button>
    <button class="button next-btn-winner" id='prev-winner' disabled>Next page</button>
  </div>
`;
