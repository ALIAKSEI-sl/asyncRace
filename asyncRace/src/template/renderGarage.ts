import { ICar } from '../models/garage.model';
import { IStorageService } from '../models/store.model';
import renderCar from './renderCar';

export default (storage: IStorageService) => `
  <h1>Garage (${storage.countCar})</h1>
  <h2>Page #(${storage.pageGarage})</h2>
  <ul class="garage">
    ${storage.garage
      .map(
        ({ name, color, id }: ICar) => `<li>${renderCar(name, color, id)}</li>`
      )
      .join('')}
  </ul>
`;
