import { LifeExpectancy } from './../src/lifeExpectancy';

let lifeExpectancy = new LifeExpectancy();

export class GalacticYearsLeft {
  constructor(age, yearsLeft) {
    this.age = age;
    this.yearsLeft = yearsLeft;
  }
   
  checkYearsLeft() {
    return this.yearsLeft = lifeExpectancy.avarageLife - this.age
  }

  mercuryYearsLeft() {
    return this.yearsLeft = Math.round( this.yearsLeft /= .24)
  }

  venusYearsLeft() {
    return this.yearsLeft = Math.round(this.yearsLeft /= .62)
  }

  marsYearsLeft() {
    return this.yearsLeft = Math.round(this.yearsLeft /= 1.88)
  }
  
  jupiterYearsLeft() {
    return this.yearsLeft = Math.round(this.yearsLeft /= 11.86)
  }

}