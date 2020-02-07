export class GalacticAge {
  constructor(age){
    this.age = age;
  }
  
  mercuryYears() {
   return this.age /= .24;
  }

  venusYears() {
   return this.age = Math.floor(this.age /= .62);
  }

  marsYears() {
    return this.age = Math.round(this.age /= 1.88);
  }

  jupiterYears() {
    return this.age = Math.round(this.age /= 11.86);
  }

}