// create class for creating tamagotchi objects
class Tamagotchi {
    constructor(hunger, sleepiness, boredom, age) {
        this.hunger = hunger;
        this.sleepiness = sleepiness;
        this.boredom = boredom;
        this.age = age;
    }

}

// create tamagotchi object
let myTamagotchi = new Tamagotchi(1, 1, 1, 0);

//create functions to increment stats

function incrementHunger() {
    let timeoutID = window.setTimeout(function() {
        myTamagotchi.hunger += 1;
        $("#hunger").replaceWith(`<p id='hunger'>Hunger: ${myTamagotchi.hunger}</p>`);
        incrementHunger();
    }, 15000)

};

function incrementSleepiness() {
    let timeoutID = window.setTimeout(function() {
        myTamagotchi.sleepiness += 1;
        $("#sleepiness").replaceWith(`<p id='sleepiness'>Sleepiness: ${myTamagotchi.sleepiness}</p>`);
        incrementSleepiness();
    }, 20000)

};

function incrementBoredom() {
    let timeoutID = window.setTimeout(function() {
        myTamagotchi.boredom += 2;
        $("#boredom").replaceWith(`<p id='boredom'>Boredom: ${myTamagotchi.boredom}</p>`);
        incrementBoredom();
    }, 20000)

};

function hatch() {
    let timeoutID = window.setTimeout(function() {
        myTamagotchi.age += 1;
        $("#age").replaceWith(`<p id='age'>Age: ${myTamagotchi.age}</p>`);
        birth();
    }, 10000)
}

function incrementAge() {
    let timeoutID = window.setTimeout(function() {
        myTamagotchi.age += 1;
        $("#age").replaceWith(`<p id='age'>Age: ${myTamagotchi.age}</p>`);
        incrementAge();
    }, 5000)

}

function birth() {
    if (myTamagotchi.age < 1) {
        hatch();
    } else {
        $("img:eq(1)").replaceWith("<img src='tamagotchi-bunny-2.png'>")
        incrementAge();
    }
}

incrementHunger();
incrementSleepiness();
incrementBoredom();
birth();
