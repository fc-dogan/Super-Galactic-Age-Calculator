import { LifeExpectancy } from './../src/lifeExpectancy';

export class GalacticYearsLeft {
  constructor(age, yearsLeft) {
    this.age = age;
    this.yearsLeft = yearsLeft;
    this.lifeExpectancy = new LifeExpectancy();
  }
   
  checkYearsLeft() {
    return this.yearsLeft = this.lifeExpectancy.avarageLife - this.age
  }

  mercuryYearsLeft() {
    return this.yearsLeft = Math.round( this.yearsLeft / .24)
  }

  venusYearsLeft() {
    return this.yearsLeft = Math.round(this.yearsLeft / .62)
  }

  marsYearsLeft() {
    return this.yearsLeft = Math.round(this.yearsLeft / 1.88)
  }
  
  jupiterYearsLeft() {
    return this.yearsLeft = Math.round(this.yearsLeft /= 11.86)
  }

}