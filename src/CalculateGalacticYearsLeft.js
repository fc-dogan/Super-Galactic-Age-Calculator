// import { LifeExpectancy } from './../src/lifeExpectancy';
import { GalacticYearsLeft } from './../src/galactic-years-left';

// let lifeExpectancy = new LifeExpectancy();

let galacticYearsLeft = new GalacticYearsLeft();
let earthYearsLeft = galacticYearsLeft.yearsLeft;

export class CalculateGalacticYearsLeft {
  constructor(yearsLeft){
    this.yearsLeft = yearsLeft;
  }

mercuryYearsLeft() {
  return this.yearsLeft = Math.round( earthYearsLeft /= .24)
}

}