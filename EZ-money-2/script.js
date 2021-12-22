document.addEventListener("keydown",function(event){
    console.log(event.keyCode)
    if (event.keyCode == 46) {
        reset();
    }
})

var game = {
    stats: {    
        money: 0,
        multiplier: 1,
        rebirth: 0,
        super_rebirth: 0,
        ultra_rebirth: 0,
        prestige: 0,
        super_prestige: 0,
        ultra_prestige: 0,
        power: 0,
        super_power: 0,
        ultra_power: 0,
        god: 0,
        null: 0
    },
    prices: {
        rebirth: 5000,
        super_rebirth: 25,
        ultra_rebirth: 50,
        prestige: 800,
        super_prestige: 500,
        ultra_prestige: 1000,
        power: 3000,
        super_power: 5000,
        ultra_power: 8000,
        god: 1000000

    },
    things: ["money","multiplier","rebirth","super_rebirth","ultra_rebirth","prestige","super_prestige","ultra_prestige","power","super_power","ultra_power","god","null"],
    max: 100000000000000000000
}

const formatter = new Intl.NumberFormat('en', {
    notation: 'compact'
})


function update() {
    document.getElementById("money").innerHTML = "money: $" + formatter.format(game.stats.money);
    document.getElementById("multiplier").innerHTML = "upgrader: " + formatter.format(game.stats.multiplier);
    document.getElementById("rebirth").innerHTML = "rebirths: " + formatter.format(game.stats.rebirth);
    document.getElementById("super_rebirth").innerHTML = "super rebirths: " + formatter.format(game.stats.super_rebirth);
    document.getElementById("ultra_rebirth").innerHTML = "ultra rebirths: " + formatter.format(game.stats.ultra_rebirth);
    document.getElementById("prestige").innerHTML = "prestiges: " + formatter.format(game.stats.prestige);
    document.getElementById("super_prestige").innerHTML = "super prestiges: " + formatter.format(game.stats.super_prestige);
    document.getElementById("ultra_prestige").innerHTML = "ultra prestiges: " + formatter.format(game.stats.ultra_prestige);
    document.getElementById("power").innerHTML = "power: " + formatter.format(game.stats.power);
    document.getElementById("super_power").innerHTML = "super power: " + formatter.format(game.stats.super_power);
    document.getElementById("ultra_power").innerHTML = "ultra power: " + formatter.format(game.stats.ultra_power);
    document.getElementById("god").innerHTML = "gods: " + formatter.format(game.stats.god);
    
}

function start() {
    if (confirm("Are you sure?")) {
        document.getElementById("startScreen").style.visibility = "hidden";
        document.getElementById("stats").style.visibility = "visible"
        document.getElementById("buttons").style.visibility = "visible"
        document.getElementById("body").style.backgroundColor = "white";
        update();
        var child = document.getElementById("startScreen")
        child.parentNode.removeChild(child)
        setInterval(() => {
            game.stats.money += game.stats.multiplier
        }, 100);
        setInterval(() => {
            game.stats.multiplier += (game.stats.rebirth + 1) * (game.stats.god + 1);
        }, 100);
        
        setInterval(() => {
            update();
        }, 100);
        setInterval(() => {
            save();
        }, 100);
        
    }
}

function upgrade(thing) {
    if (thing == "rebirth") {
        if (game.stats.money >= game.prices.rebirth) {
            if (game.stats.rebirth >= 100000000000000000000) {
                game.stats.rebirth += 1
                game.stats.money = 0;
                game.stats.multiplier = 0;
            }
            else {
                var amount = Math.floor(game.stats.money/game.prices.rebirth);
                if (amount >= 100000000000000000000) {
                    game.stats.rebirth += 100000000000000000000 - game.stats.rebirth
                    game.stats.money = 0;
                    game.stats.multiplier = 0;                    
                }
                else {
                    if (amount * (game.stats.super_rebirth + 1) > 100000000000000000000) {
                        game.stats.rebirth += 100000000000000000000 - game.stats.rebirth
                    }
                    else {
                        game.stats.rebirth += amount * (game.stats.super_rebirth + 1)
                    }
                    game.stats.money = 0;
                    game.stats.multiplier = 0;
                }
            }
            
        }
    }
    else {
        for (var x in game.things) {
            if (game.things[x] == thing) {
                var OneDown = game.things[x - 1]
                if (game.things[x] == "god") {
                    console.log(".")
                }
                else {
                    var OneUp = game.things[x+1];
                }
                break;
            }
        }
        if (game.stats[thing] >= 100000000000000000000) {
            game.stats[thing] += 1;
            for (var x in game.things) {
                if (game.things[x] == thing) {
                    console.log(".")
                    break;
                }
                else{
                    game.stats[game.things[x]] = 0;
                }
            }
        }
        else {
            if (game.stats[OneDown] >= game.prices[thing]) {
                var amount = Math.floor(game.stats[OneDown]/game.prices[thing]) 
                if (amount > 100000000000000000000) {
                    game.stats[thing] += 100000000000000000000 - game.stats[thing]
                }
                else {
                    var thiss = game.stats[game.things[game.things.indexOf(thing) + 1]] + 1
                    if (amount * thiss >= 100000000000000000000) {
                        game.stats[thing] += 100000000000000000000 - game.stats[thing]
                    }
                    else {
                        game.stats[thing] += amount * thiss
                    }
                    for (var x in game.things) {
                        if (game.things[x] == thing) {
                            console.log(".")
                            break;
                        }
                        else{
                            game.stats[game.things[x]] = 0;
                        }
                    }
                }
            }
        }
    }
}


function save() {
    localStorage.setItem("data",JSON.stringify(game.stats));
}

function load() {
    var data  = JSON.parse(localStorage.getItem("data"))
    if (typeof data !== "undefined") {
        for (var x in data) {
            game.stats[x] = data[x]
        }
    }
}
/*
function reset() {
    game = {
        stats: {    
            money: 0,
            multiplier: 1,
            rebirth: 0,
            super_rebirth: 0,
            ultra_rebirth: 0,
            prestige: 0,
            super_prestige: 0,
            ultra_prestige: 0,
            power: 0,
            super_power: 0,
            ultra_power: 0,
            god: 0,
            null: 0
        },
        prices: {
            rebirth: 5000,
            super_rebirth: 25,
            ultra_rebirth: 50,
            prestige: 800,
            super_prestige: 500,
            ultra_prestige: 1000,
            power: 3000,
            super_power: 5000,
            ultra_power: 8000,
            god: 1000000
    
        },
        things: ["money","multiplier","rebirth","super_rebirth","ultra_rebirth","prestige","super_prestige","ultra_prestige","power","super_power","ultra_power","god","null"],
        max: 100000000000000000000
    }
    
}

*/
