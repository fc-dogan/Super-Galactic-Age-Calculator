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
       this.avarageLife += 4;
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

   checkActivity(activityLevel) {
     this.activityLevel = activityLevel;
    if(this.activityLevel === "sedentary"){
      this.avarageLife; 
    }else if(this.activityLevel === "moderate"){
      this.avarageLife += 2;
    } else if(this.activityLevel === "high"){
      this.avarageLife += 3;
    }
   }

}