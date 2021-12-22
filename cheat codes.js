function redeem_cheat_code(code) {
    if (code == "uFoundIt") {
        game.stats.god = 1;
        console.log("you have been given 1 god")
    }
    if (code == "0pr!cEs") {
        for (var x in game.prices) {
            game.prices[x] = 0.1;
            console.log("All prices set to 0")
        }
    }
    if (code == "14D!getStats") {
        for (var x in game.stats) {
            game.stats[x] = 10000000000000;
            console.log("you have been given 10 trillion of everything")
        }
    }    
    else {
        console.log("No such code!")
    }
}