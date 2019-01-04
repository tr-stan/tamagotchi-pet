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

//create boolean for tamagotchi is alive or dead
$("#restart").hide();
let alive = true;
//create functions to increment stats

function incrementHunger() {
    let timeoutID = window.setTimeout(function() {
        myTamagotchi.hunger += 1;
        $("#hunger").replaceWith(`<p id='hunger'>Hunger: ${myTamagotchi.hunger}</p>`);
        if (alive) {
            incrementHunger();
        }
    }, 15000)

};

function incrementSleepiness() {
    let timeoutID = window.setTimeout(function() {
        myTamagotchi.sleepiness += 1;
        $("#sleepiness").replaceWith(`<p id='sleepiness'>Sleepiness: ${myTamagotchi.sleepiness}</p>`);
        if (alive) {
            incrementSleepiness();
        }
    }, 20000)

};

function incrementBoredom() {
    let timeoutID = window.setTimeout(function() {
        myTamagotchi.boredom += 2;
        $("#boredom").replaceWith(`<p id='boredom'>Boredom: ${myTamagotchi.boredom}</p>`);
        if (alive) {
            incrementBoredom();
        }
    }, 16000)

};

// create functions to hatch the tamagotchi after x second, increment age after y seconds
function grow() {
    if (myTamagotchi.age < 1) {
        hatch();
    } else {
        $("img:eq(1)").replaceWith("<img src='tamagotchi-bunny-2.png'>")
        incrementAge();
    }
}

function hatch() {
    let timeoutID = window.setTimeout(function() {
        myTamagotchi.age += 1;
        $("#age").replaceWith(`<p id='age'>Age: ${myTamagotchi.age}</p>`);
        grow();
    }, 15000)
}

function incrementAge() {
    let timeoutID = window.setTimeout(function() {
        myTamagotchi.age += 1;
        $("#age").replaceWith(`<p id='age'>Age: ${myTamagotchi.age}</p>`);
        if (alive) {
            incrementAge();
        }
    }, 20000)

}


//create functions to decrease stats
function feed() {
    if (myTamagotchi.hunger >= 2) {
        myTamagotchi.hunger -= 2;
        $("#hunger").replaceWith(`<p id='hunger'>Hunger: ${myTamagotchi.hunger}</p>`);
    } else {
        myTamagotchi.hunger = 0;
        $("#hunger").replaceWith(`<p id='hunger'>Hunger: ${myTamagotchi.hunger}</p>`);
    }
}

function play() {
    if (myTamagotchi.boredom >= 3) {
        myTamagotchi.boredom -= 3;
        $("#boredom").replaceWith(`<p id='boredom'>Boredom: ${myTamagotchi.boredom}</p>`);
    } else {
        myTamagotchi.boredom = 0;
        $("#boredom").replaceWith(`<p id='boredom'>Boredom: ${myTamagotchi.boredom}</p>`);
    }
}

function bedtime(time) {
    let timeoutID = window.setTimeout(function() {
        myTamagotchi.sleepiness -= 1;
        $("#sleepiness").replaceWith(`<p id='sleepiness'>Sleepiness: ${myTamagotchi.sleepiness}</p>`);
    }, time)
}

// create functions to die and to restart game
function restart() {
    let alive = true;
    $("#restart").hide();
    $("img:eq(1)").replaceWith("<img src='tamagotchi-bunny-2.png'>");
    myTamagotchi.sleepiness = 0;
    $("#sleepiness").replaceWith(`<p id='sleepiness'>Sleepiness: ${myTamagotchi.sleepiness}</p>`);
    $("#sleep").show()
    myTamagotchi.boredom += 2;
    $("#boredom").replaceWith(`<p id='boredom'>Boredom: ${myTamagotchi.boredom}</p>`);
    $("#play").show()
    myTamagotchi.hunger = 0;
    $("#hunger").replaceWith(`<p id='hunger'>Hunger: ${myTamagotchi.hunger}</p>`);
    $("#feed").show()
}

function die() {
    alive = false;
    $("img:eq(1)").replaceWith("<img src='tamagotchi-dead.png'>");
    $("#sleep").hide();
    $("#play").hide();
    $("#feed").hide();
}

// increment(myTamagotchi, hunger, 3000);
incrementHunger();
incrementSleepiness();
incrementBoredom();
grow();

//set up click event listeners
$("#sleep").click(function() {
    bedtime(5000);
});

$("#play").click(function() {
    play();
})

$("#feed").click(function() {
    feed();
})

$("#restart").click(function() {
    restart();
})


if (myTamagotchi.boredom > 9 || myTamagotchi.hunger > 9 || myTamagotchi.sleepiness > 9) {
    die();
    $("#restart").show()
}