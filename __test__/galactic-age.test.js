import { GalacticAge } from './../src/galactic-age';

describe('GalacticAge', () => {

  test('should correctly create a galacticAge object with age', () => {
    var galacticAge = new GalacticAge(30);
    expect(galacticAge.age).toEqual(30);
  });

  test('should correctly calculate age as a Mercury age', () => {
    var galacticAge = new GalacticAge(30);
    expect(galacticAge.mercuryYears()).toEqual(125);
  });

  test('should correctly calculate age as a Venus age', () => {
    var galacticAge = new GalacticAge(30);
    expect(galacticAge.venusYears()).toEqual(48);
  });

  test('should correctly calculate age as a Mars age', () => {
    var galacticAge = new GalacticAge(30);
    expect(galacticAge.marsYears()).toEqual(16);
  });

  test('should correctly calculate age as a Jupiter age', () => {
    var galacticAge = new GalacticAge(30);
    expect(galacticAge.jupiterYears()).toEqual(3);
  })


});