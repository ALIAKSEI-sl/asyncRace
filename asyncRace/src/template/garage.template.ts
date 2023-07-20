import { ICar } from '../models/garage.model';
import renderGarage from './renderGarage';

export default (countCar: number, pageGarage: number, garage: ICar[]) => `
    <div class="container-forms">
      <form class="form" id="create" name="create">
        <input class="input" id="create-name" name="nameCar" type=""text"></input>
        <input class="color" id="create-color" name="color" type="color" value="#000000"></input>
        <button class="button button-create" type="submit">Create</button>
      </form>
      <form class="form" id="update" name="update">
        <input class="input" id="update-name" name="nameCar" type=""text" disabled></input>
        <input class="color" id="update-color" name="color" type="color" value="#ffffff" disabled></input>
        <button class="button" id="update-submit" type="submit" name="button" disabled>Update</button>
      </form>
    </div>

    <div class="race-controls">
      <button class="button race-btn" id="race" type="submit">Race</button>
      <button class="button reset-btn" id="reset" type="submit" disabled>Reset</button>
      <button class="button generator-btn" id="generator"> Generate cars</button>
    </div>

    <div class="container-garage">
      ${renderGarage(countCar, pageGarage, garage)}
    </div>

    <div class="pagination">
      <button class="button prev-btn-garage" id='prev-garage' disabled>Previous page</button>
      <button class="button next-btn-garage" id='next-garage' disabled>Next page</button>
    </div>
`;
