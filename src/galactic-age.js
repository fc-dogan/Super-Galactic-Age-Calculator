
export class GalacticAge {
  constructor(age){
    this.age = age;
  }
  
  mercuryYears() {
   return Math.round(this.age / .24);
  }

  venusYears() {
   return Math.round(this.age / .62);
  }

  marsYears() {
    return Math.round(this.age / 1.88);
  }

  jupiterYears() {
    return Math.round(this.age /= 11.86);
  }

}