import { IStorageService } from '../models/store.model';
import renderGarage from './renderGarage';

export default (storage: IStorageService) => `
    <div>
      <form class='form' id='create'>
        <input class='input' id='create-name' name="nameCar" type=""text"></input>
        <input class="color" id="create-color" name="color" type="color" value="#000000"></input>
        <button class="button button-create" type="submit">Create</button>
      </form>
      <form class='form' id='update'>
        <input class='input' id='update-name' name="nameCar" type=""text" disabled></input>
        <input class="color" id="update-color" name="color" type="color" value="#ffffff" disabled></input>
        <button class="button" id="update-submit" type="submit" name="button" disabled>Update</button>
      </form>
    </div>

    <div class="race-controls">
      <button class="button race-button" id='race' type="submit">Race</button>
      <button class="button reset-button" id='reset' type="submit">Reset</button>
      <button class="button generator-button" id='generator'> Generate cars</button>
    </div>

    <div id="garage">
      ${renderGarage(storage)}
    </div>

    <div class="pagination">
      <button class="button prev-btn-garage" id='prev-garage' disabled>Prev</button>
      <button class="button next-btn-garage" id='next-garage' disabled>Next</button>
    </div>
`;
