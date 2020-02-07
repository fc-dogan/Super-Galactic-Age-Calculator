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

}