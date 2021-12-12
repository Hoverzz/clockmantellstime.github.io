document.addEventListener("keydown",function(event) {
    if (event.keyCode == 49) {
        growCrops();
    }
    if (event.keyCode == 50) {
        sellCrops();
    }
})
var game = {
    stats: {
        crops: [],
        seeds: [],
        money: 5,
        land: "backyard",
        multiplier: 1,
        GrowingTime: 5000,
        prestiges: 0,
    },
    prices:{
        seeds: {
            //backyard
            wheat: 5,
            carrots: 50,
            potatoes: 500,
            tomatoes: 10000,
            onions: 250000,
            //smallField
            radish: 5000000,
            raspberry: 100000000,
            blueberry: 5000000000,
            blackberry: 1000000000000,
            grapes: 100000000000000,
            //desert
            sugarcane: 10000000
        },
        sellPrices: {
            wheat: 5,
            carrots: 25,
            potatoes: 250,
            tomatoes: 4000,
            onions: 50000,
            radish: 10000000,
            raspberry: 15000000,
            blueberry: 300000000,
            blackberry: 150000000000,
            grapes: 15000000000000,
            sugarcane: 2500000,
        },
        land: {
            backyard: 0,
            smallField: 1000000,

        },
        GrowingTime: 1000,
        prestige: 1000000000000000000 + 1000
    },
    multipliers: {
        backyard: 1,
        smallField: 2,
    },
    spaces: {
        backyard: 10,
        smallField: 25,
    },
    land: ["desert","smallField","backyard"],
    seeds: ["sugarcane","grapes","blackberry","blueberry","raspberry","radish","onions","tomatoes","potatoes","carrots","wheat"],
    growing: false
}

function num2txt(num) {
    const suffixes = ["k"," million", " billion"," trillion","aa","ab","ac","ad","ae","af","ag","ah"];
    let n = String(num);
    let txt = 0
    
    if (num > 999) {
        if ((n.length-1) % 3 === 0) {
            let first = n.charAt(0);
            let suffix = suffixes[((n.length-1)/3)-1]
            txt = first + suffix
        }
        if ((n.length-2) % 3 === 0) {
            let first = n.charAt(0);
            let second = n.charAt(1)
            let suffix = suffixes[((n.length-2)/3)-1]
            txt = first +second+ suffix
        }
        if ((n.length-3) % 3 === 0) {
            let first = n.charAt(0);
            let second = n.charAt(1)
            let third = n.charAt(2)
            let suffix = suffixes[((n.length-2)/3)-1]
            txt = first +second+ third+ suffix
        }
    }
    else{
        return num
    }
    
    
    return txt
}    

function buySeeds(seed) {
    //if 'seed' is a crop
    var y = 0
    for (var x in game.seeds) {
        if (seed == game.seeds[x]) {
            y = 1
        }
    } 
    if (y === 1) {
        //if you have enough money
        if (game.stats.money >= game.prices.seeds[seed]) {
            //if there is enough room to buy more seeds
            if (game.stats.seeds.length != game.spaces[game.stats.land]) {
                game.stats.money -= game.prices.seeds[seed];
                game.stats.seeds.push(seed);
            }
            //if there is not
            if (game.stats.seeds.length === (game.spaces[game.stats.land])) {
                //gets the worst crop to replace
                for (var x in game.crops) {
                    for (var i in game.stats.seeds) {
                        if (game.stats.seeds[i] == game.crops[x]) {
                            var crop = game.stats.seeds.indexOf(game.crops[x]);
                        }
                    }
                }
                if (seed == game.seeds[crop]) {}
                else{
                    game.stats.seeds.splice(crop,1);
                    game.stats.seeds.push(seed)
                    game.stats.money -= game.prices.seeds[seed];
                }
            }
        }    
        else {
            window.alert("you are $"+((game.prices.seeds[seed]) - (game.stats.money)) +" short!")
        }
    }
    document.getElementById("money").innerHTML = "money " + game.stats.money
    document.getElementById("seeds").innerHTML = "seeds:" + game.stats.seeds
}

function growCrops() {
    if (game.stats.seeds.length > 0) {
        if (game.growing === false) {
            window.alert("started growing crops")
            game.growing = true;
            var seeds = game.stats.seeds
            setTimeout(function(){  
                for (var i in seeds) {
                    game.stats.crops.push(seeds[i])
                }
                game.growing = false;
                window.alert("finished growing crops!")
                document.getElementById("crops").innerHTML = "crops:" + game.stats.crops
            },game.stats.GrowingTime)
        }    
    }
    else {
        window.alert("You need to buy some seeds first!")
    }
    
}

function sellCrops() {
    for (var i in game.stats.crops) {
        game.stats.money += (game.prices.sellPrices[game.stats.crops[i]] * game.stats.multiplier);  
    }
    game.stats.crops = [];
    document.getElementById("money").innerHTML = "money " + game.stats.money
    document.getElementById("crops").innerHTML = "crops:" + game.stats.crops
}

function buyNewLand(land) {
    if (game.stats.money >= game.prices.land[land]) {
        window.alert("You bought a " + land + "!")
        if (game.land.indexOf(land) < game.land.indexOf(game.stats.land)) {
            game.growing = false
            game.stats.money -= game.prices.land[land]
            sellCrops()
            game.stats.seeds = []
            game.stats.land = land
            game.stats.multiplier *= game.multipliers[land]
        }
    }
    else {
        window.alert("You need " +  (game.prices.land[land] - game.stats.money) + " more money to do that!")
    }
    document.getElementById("money").innerHTML = "money " + game.stats.money

}
function reduceGrowingTime() {
    ``
}