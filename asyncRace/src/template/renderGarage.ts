import { ICar } from '../models/garage.model';
import renderCar from './renderCar';

export default (countCar: number, pageGarage: number, garage: ICar[]) => `
  <h1 class="header">Garage (${countCar})</h1>
  <h2 class="header-page">Page #(${pageGarage})</h2>
  <ul class="garage">
    ${garage
      .map(
        ({ name, color, id }: ICar) => `<li>${renderCar(name, color, id)}</li>`
      )
      .join('')}
  </ul>
`;
