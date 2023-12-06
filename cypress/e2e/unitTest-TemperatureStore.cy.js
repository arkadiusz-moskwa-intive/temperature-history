import {TemperatureStore} from "../../js/temperatureStore.js";
describe('Unit test TemperatureStore', () => {
  const testStore = new TemperatureStore('storageKey');

  beforeEach(() => {
    cy.setLocalStorage('testStorage', JSON.stringify(Array(100)));
    cy.stub(testStore.currentTemperature, 'render').returns(true);
    cy.stub(testStore.temperatureChart, 'render').returns(true);
    cy.stub(testStore.temperatureTableBody, 'render').returns(true);
  });

  after(() => {
    cy.clearLocalStorage('storageKey');
  });

  it('rendering empty', () => {
    testStore.render();

    expect(testStore.temperatures.length).to.eq(0);
    expect(testStore.currentTemperature.render).to.be.calledWith(null);
    expect(testStore.temperatureChart.render).to.be.calledOnceWith([]);
    expect(testStore.temperatureTableBody.render).to.be.calledOnceWith([]);
  });

  it('rendering single element', () => {
    testStore.add({temperature: -5});
    testStore.render();
    expect(testStore.temperatures.length).to.eq(1);
    expect(testStore.currentTemperature.render).to.be.calledWith(-5);
    expect(testStore.temperatureChart.render).to.be.calledWith(testStore.temperatures);
    expect(testStore.temperatureTableBody.render).to.be.calledWithMatch(testStore.temperatures);
  });

  it('does not add 101 element', () => {
    const storeUnderTest = new TemperatureStore('testStorage');
    expect(storeUnderTest.temperatures.length).to.eq(100);
    storeUnderTest.add({temperature: 1});
    expect(storeUnderTest.temperatures.length).to.eq(100);
  })
})
