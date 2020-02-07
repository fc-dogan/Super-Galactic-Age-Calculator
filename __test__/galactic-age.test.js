import { GalacticAge } from './../src/galactic-age';

describe('GalacticAge', () => {

  test('should correctly create a galacticAge object with age', () => {
    var galacticAge = new GalacticAge(30);
    expect(galacticAge.age).toEqual(30);
  });
  
});