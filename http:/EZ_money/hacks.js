
function hack() {
    var GG = setInterval(function() {
    change("money",stats.upgrade);
    if(stats.money >= 1000){
        change("upgrade",Math.floor(stats.money/prices.upgrade))
        change("money",-(Math.floor(stats.money/prices.upgrade)*prices.upgrade))
    }                    
    },1)

    var stop = setInterval(function(){
        if (stats.upgrade > 1000000000000000000) {
            clearInterval(GG);
            clearInterval(stop);
        }
    },1)
}

function hack_1(n) {
    for (var x in stats){
        if (x.indexOf('Earn') > -1) {
            var y = 0;
        }
        if (x.indexOf('Lvl') > -1) {
            var y = 0
        }
        else {
            stats[x] = n;
        }
    }
}

function hack_2(n){
    for (var x in stats){
        if (x.indexOf('Earn') > -1) {
            stats[x] = n;
        }
        else {
            x = 0;
        }
    }           
}

