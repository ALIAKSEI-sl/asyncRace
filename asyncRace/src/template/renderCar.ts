import carColor from './carColor';

export default (name: string, color: string, id: number) => `
  <div class="general-buttons">
    <button class="button select-button" id="select-car-${id}">Select</button>
    <button class="button remove-button" id="remove-car-${id}">Remove</button>
    <span class="car-name">${name}</span>
  </div>
  <div class="control-buttons">
    <button class="button start-engine-button" id="start-engine-car-${id}">Start</button>
    <button class="button stop-engine-button" id="stop-engine-car-${id}" disabled>Stop</button>
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
