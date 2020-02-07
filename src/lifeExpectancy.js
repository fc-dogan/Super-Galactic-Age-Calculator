export class LifeExpectancy {
  constructor(){
    this.gender = "";
    this.smoking = "";
    this.activityLevel = "";
    this.avarageLife = 78;
  }

  checkGender(gender) {
    this.gender = gender;
    if(this.gender === "female"){
      return this.avarageLife += 4;
    } else {
      this.avarageLife;
    }
   }

  checkSmoking(smoking) {
    this.smoking = smoking;
    if (this.smoking === "never"){
      this.avarageLife += 2;
    } else if (this.smoking === "quit"){
      this.avarageLife -=1;
    } else {
      this.avarageLife -= 4;
    }
   }

}