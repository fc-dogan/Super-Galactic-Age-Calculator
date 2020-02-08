import { GalacticAge } from './../src/galactic-age';
import { LifeExpectancy } from './../src/lifeExpectancy';
import { GalacticYearsLeft } from './../src/galactic-years-left';
import { CalculateGalacticYearsLeft } from './../src/CalculateGalacticYearsLeft';



describe('GalacticAge', () => {

  let galacticAge;

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

  let lifeExpectancy;

  beforeEach(() => {
    lifeExpectancy = new LifeExpectancy();
  });

  test('should correctly create lifeExpectancy object with four properties', () => {

    expect(lifeExpectancy.gender).toEqual("");
    expect(lifeExpectancy.smoking).toEqual("");
    expect(lifeExpectancy.activityLevel).toEqual("");
    expect(lifeExpectancy.avarageLife).toEqual(78);
    console.log(lifeExpectancy.avarageLife);
  });

  test('should correctly determine avarageLife based on gender', () => {
    lifeExpectancy.checkGender("female");
    expect(lifeExpectancy.avarageLife).toEqual(82);
  });

  test('should correctly determine avarageLife based on smoking', () => {
    lifeExpectancy.checkSmoking("never");
    expect(lifeExpectancy.avarageLife).toEqual(80);
    console.log(lifeExpectancy.avarageLife);
  });

  test('should correctly determine avarageLife based on activity level', () => {
    lifeExpectancy.checkActivity("moderate");
    expect(lifeExpectancy.avarageLife).toEqual(80);
    console.log(lifeExpectancy.avarageLife);
  });

});



describe('GalacticYearsLeft', () => {

  let galacticYearsLeft;

  beforeEach(() => {
    galacticYearsLeft = new GalacticYearsLeft(30, 48);
  });

  test('should correctly create GalaticYearsLeft object with two properties', () => {
    expect(galacticYearsLeft.age).toEqual(30);
    expect(galacticYearsLeft.yearsLeft).toEqual(48);
  });

  test('should correctly determines how many years user left', () => {
    expect(galacticYearsLeft.checkYearsLeft()).toEqual(48);
    console.log(galacticYearsLeft.checkYearsLeft());
  });

  test('should correctly determine how many Mercury years left', () => {
     expect(galacticYearsLeft.mercuryYearsLeft()).toEqual(200);
  });

  test('should correctly determine how many Venus years left', () => {
    expect(galacticYearsLeft.venusYearsLeft()).toEqual(77);
 });

  test('should correctly determine how many Mars years left', () => {
    expect(galacticYearsLeft.marsYearsLeft()).toEqual(26);
 });

  test('should correctly determine how many Jupiter years left', () => {
    expect(galacticYearsLeft.jupiterYearsLeft()).toEqual(4);
 });



});



// describe('CalculateGalacticYearsLeft', () => {

//   let calculateGalacticYearsLeft;

//   beforeEach(() => {
//     calculateGalacticYearsLeft = new CalculateGalacticYearsLeft();
//   });

//   test('should correctly determine how many mars years left', () => {
//     expect(calculateGalacticYearsLeft.mercuryYearsLeft()).toEqual(48);
//     console.log(galacticAge.mercuryYearsLeft());
//   });

// });
