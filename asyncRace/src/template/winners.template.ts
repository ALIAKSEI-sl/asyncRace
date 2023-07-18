import { IStorageService } from '../models/store.model';
import renderWinners from './renderWinners';

export default (storage: IStorageService) => `
<h1>Winners (${storage.countWinners})</h1>
<h2>Page #(${storage.pageWinners})</h2>
<table>
  <thead>
    <tr>
      <th>Number</th>
      <th>Car</th>
      <th>Name</th>
      <th class="number-wins">Wins</th>
      <th class="record-column">Best time (seconds)</th>
    </tr>
  </thead>
  <tbody>
  ${renderWinners(storage)}
  </tbody>
</table>
<div class="pagination">
<button class="button prev-btn-winner" id='prev-winner' disabled>Prev</button>
<button class="button next-btn-winner" id='prev-winner' disabled>Next</button>
</div>
`;
