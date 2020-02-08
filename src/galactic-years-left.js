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


}