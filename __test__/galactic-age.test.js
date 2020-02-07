import { GalacticAge } from './../src/galactic-age';

describe('GalacticAge', () => {

  test('should correctly create a galacticAge object with age', () => {
    var galacticAge = new GalacticAge(30);
    expect(galacticAge.age).toEqual(30);
  });

  test('should correctly calculate age as a Mercury age', () => {
    var galacticAge = new GalacticAge(30)
    expect(galacticAge.mercuryYears()).toEqual(125);
  });


});