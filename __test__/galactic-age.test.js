import { GalacticAge } from './../src/galactic-age';
import { LifeExpectancy } from './../src/lifeExpectancy';

describe('GalacticAge', () => {

  var galacticAge;

  beforeEach(() => {
    galacticAge = new GalacticAge(30);
  });

  test('should correctly create a galacticAge object with age', () => {
    expect(galacticAge.age).toEqual(30);
  });

  test('should correctly calculate age as a Mercury age', () => {
    expect(galacticAge.mercuryYears()).toEqual(125);
  });

  test('should correctly calculate age as a Venus age', () => {
    expect(galacticAge.venusYears()).toEqual(48);
  });

  test('should correctly calculate age as a Mars age', () => {
    expect(galacticAge.marsYears()).toEqual(16);
  });

  test('should correctly calculate age as a Jupiter age', () => {
    expect(galacticAge.jupiterYears()).toEqual(3);
  });


});

describe('LifeExpectancy', () => {

  var lifeExpectancy;

  beforeEach(() => {
    lifeExpectancy = new LifeExpectancy();
  });

  test('should correctly create lifeExpectancy object with gender property', () => {
    expect(lifeExpectancy.gender).toEqual("")
    console.log(lifeExpectancy);
  })

});