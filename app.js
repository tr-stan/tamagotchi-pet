class Tamagotchi {
    constructor(hunger, sleepiness, boredom, age) {
        this.hunger = hunger;
        this.sleepiness = sleepiness;
        this.boredom = boredom;
        this.age = age;
    }

}
let myTamagotchi = new Tamagotchi(1, 0, 0, 0);

$("#hunger").append(myTamagotchi.hunger);
$("#sleepiness").append(myTamagotchi.sleepiness);
$("#boredom").append(myTamagotchi.boredom);
$("#age").append(myTamagotchi.age);