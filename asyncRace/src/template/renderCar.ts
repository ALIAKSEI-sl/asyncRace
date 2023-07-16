import carColor from './carColor';

export default (name: string, color: string, id: number) => `
  <div class="general-buttons">
    <button class="button select-button" id="select-car-${id}">SELECT</button>
    <button class="button remove-button" id="remove-car-${id}">REMOVE</button>
    <span class="car-name">${name}</span>
  </div>
  <div>
    <button class="A start-engine-button" id="start-engine-car-${id}">A</button>
    <button class="B stop-engine-button" id="stop-engine-car-${id}">B</button>
  </div>
  <div class="road">
    <div class="road-car">
      <div class="car" id="car-${id}">
        ${carColor(color)}
      </div>
    </div>
    <div class=" flag flag-${id}"></div>
  </div>
`;
