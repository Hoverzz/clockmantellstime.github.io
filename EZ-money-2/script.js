document.addEventListener("keydown",function(event){
    console.log(event.key + " - " + event.keyCode)
    if (event.keyCode == 46) {
        reset();
    }
    if (event.keyCode == 191) {
        game.stats.money += (game.stats.multiplier) * ((game.stats.rebirth + game.stats.super_rebirth + game.stats.ultra_rebirth + game.stats.prestige + game.stats.super_prestige + game.stats.ultra_prestige + game.stats.power + game.stats.super_power + game.stats.ultra_power + game.stats.god)+1)
    }
    if (event.keyCode == 72) {
        z *= -1
        if (z === -1) {
            document.addEventListener("mousemove", function(e) {
                document.getElementById("box").style.left = e.x - 50 + "px"
                document.getElementById("box").style.top = e.y  - 50 + "px"
            })
        }
    }  
    if (event.keyCode == 49) {
        upgrade("rebirth")
    }  
    if (event.keyCode == 50) {
        upgrade("super_rebirth")
    }  
    if (event.keyCode == 51) {
        upgrade("ultra_rebirth")
    }  
    if (event.keyCode == 52) {
        upgrade("prestige")
    } 
    if (event.keyCode == 53) {
        upgrade("super_prestige")
    }   
    if (event.keyCode == 54) {
        upgrade("ultra_prestige")
    }  
    if (event.keyCode == 55) {
        upgrade("power")
    }  
    if (event.keyCode == 56) {
        upgrade("super_power")
    }  
    if (event.keyCode == 57) {
        upgrade("ultra_power")
    }  
    if (event.keyCode == 48) {
        upgrade("god")
    }  
})



var i = 0;
var r = 0;
var q = 0;
var z = 1;
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
        null: 0,
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
    controls: {
        backgroundColor: "rgb",
        max: 100000000000000000000,
        StartScreenHidden: false,
        
    },
    achivements: {

    },
    things: ["money","multiplier","rebirth","super_rebirth","ultra_rebirth","prestige","super_prestige","ultra_prestige","power","super_power","ultra_power","god","null"],
}


function tidy(char) {
    try {
        if (typeof(char) == "number") {
        const formatter = new Intl.NumberFormat('en', {
            notation: 'compact'
        })
            char = String(formatter.format(char));
            return char
        }
        
        else {
            if (char.includes("_")) {
                var x = char.replace("_"," ")
            }
            else {
                var x = char;
            }
            return x
        }
    }
    catch(err) {
        reset();
    }
}

function update() {
    document.getElementById("money").innerHTML = "money: $" + tidy(game.stats.money);
    document.getElementById("multiplier").innerHTML = "upgrader: " + tidy(game.stats.multiplier);
    document.getElementById("rebirth").innerHTML = "rebirths: " + tidy(game.stats.rebirth);
    document.getElementById("super_rebirth").innerHTML = "super rebirths: " + tidy(game.stats.super_rebirth);
    document.getElementById("ultra_rebirth").innerHTML = "ultra rebirths: " + tidy(game.stats.ultra_rebirth);
    document.getElementById("prestige").innerHTML = "prestiges: " + tidy(game.stats.prestige);
    document.getElementById("super_prestige").innerHTML = "super prestiges: " + tidy(game.stats.super_prestige);
    document.getElementById("ultra_prestige").innerHTML = "ultra prestiges: " + tidy(game.stats.ultra_prestige);
    document.getElementById("power").innerHTML = "power: " + tidy(game.stats.power);
    document.getElementById("super_power").innerHTML = "super power: " + tidy(game.stats.super_power);
    document.getElementById("ultra_power").innerHTML = "ultra power: " + tidy(game.stats.ultra_power);
    document.getElementById("god").innerHTML = "gods: " + tidy(game.stats.god);
}

function startGame() {
    navigator.clipboard.writeText('EZ money is cool!');
    typeWriter()
    load();
}

function start() {
    document.getElementById("startScreen").style.visibility = "hidden";
    document.getElementById("stats").style.visibility = "visible"
    document.getElementById("buttons").style.visibility = "visible"
    document.getElementById("body").style.backgroundColor = "white";
    document.getElementById("body").className = "thisssss"
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
    setInterval(() => {
        game.stats.rebirth += game.stats.super_rebirth/5;
    }, 100);  
    setInterval(() => {
        game.stats.super_rebirth += game.stats.ultra_rebirth/10;
    }, 100);
    setInterval(() => {
        game.stats.ultra_rebirth += game.stats.prestige/25;
    }, 100);    
    setInterval(() => {
        game.stats.prestige += game.stats.super_prestige/50;
    }, 100);       
    setInterval(() => {
        game.stats.super_prestige += game.stats.ultra_prestige/100;
    }, 100);   
    setInterval(() => {
        game.stats.ultra_prestige += game.stats.power/250;
    }, 100);   
    setInterval(() => {
        game.stats.power += game.stats.super_power/500;
    }, 100);  
    setInterval(() => {
        game.stats.super_power += game.stats.ultra_power/1000;
    }, 100);    
    setInterval(() => {
        game.stats.ultra_power += game.stats.god/1000000;
    }, 100);
    
    
    if (game.controls.backgroundColor === "rgb") {
        document.getElementById("body").style.animation = "sports 5s 0s infinite alternate none";
    }
    else {
        document.getElementById("body").style.backgroundColor = game.controls.backgroundColor;
    }
}

function save() {
    localStorage.setItem("data",JSON.stringify(game));
}
function load() {
    var data  = JSON.parse(localStorage.getItem("data"))
    if (typeof data !== "undefined") {
        for (var x in data) {
            game[x] = data[x]
        }
    }
}
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
        things: ["multiplier","money","rebirth","super_rebirth","ultra_rebirth","prestige","super_prestige","ultra_prestige","power","super_power","ultra_power","god","null"],
        controls: {
            backgroundColor: "rgb",
            max: 100000000000000000000,
            StartScreenHidden: false,
        }
    }
    
}

function typeWriter() {
    const txt = 'Another simple game where you earn some simple money...';   
    try { 
        if (i < txt.length) {
            document.getElementById("glow1").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
        if (i === txt.length) { 
            setTimeout(function () {document.getElementById("glow1").innerHTML = " "}, 2500);
            setTimeout(typeWriter2, 3000);
        }
    }
    catch(err) {
        game.stats.money += game.stats.multiplier;
    }
}
function typeWriter2() {
    const txt = 'I hope you enjoy the game!';   
    try { 
        if (r < txt.length) {
            document.getElementById("glow1").innerHTML += txt.charAt(r);
            r++;
            setTimeout(typeWriter2, 100);
        }
        if (r === txt.length) { 
            setTimeout(function () {document.getElementById("glow1").innerHTML = " "}, 59500);
            setTimeout(typeWriter3, 60000);
        }
    }
    catch(err) {
        game.stats.money += game.stats.multiplier;
    }
}
function typeWriter3() {
    const txt = '$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$';   
    try { 
        if (q < txt.length) {
            document.getElementById("glow1").innerHTML += txt.charAt(q);
            q++;
            setTimeout(typeWriter3, 25);
        }
    }
    catch(err) {
        game.stats.money += game.stats.multiplier;
    }
}

function upgrade(thing) {
    if (game.stats[game.things[game.things.indexOf(thing) - 1]] >= game.prices[thing]) {
        var amount = Math.floor(game.stats[game.things[game.things.indexOf(thing) - 1]]/game.prices[thing])
        if (amount > game.controls.max || game.stats[game.things[game.things.indexOf(thing) + 1]] + 1 > game.controls.max || amount * game.stats[game.things[game.things.indexOf(thing) + 1]] + 1 > game.controls.max){
            game.stats[thing] += game.controls.max - game.stats[thing]
        }
        else {
            game.stats[thing] += amount * (game.stats[game.things[game.things.indexOf(thing) + 1]] + 1)
        }
        for (var x in game.things) {
            if (game.things[x] == thing) {
                break;
            }
            else{
                game.stats[game.things[x]] = 0;
            }
        }
    }
    else {
        if (game.prices[thing]-game.stats[game.things[game.things.indexOf(thing) - 1]] === 1 || game.things[game.things.indexOf(thing) - 1].includes("power")) {
            window.alert("You need " + tidy(game.prices[thing]-game.stats[game.things[game.things.indexOf(thing) - 1]]) + " more " + tidy(game.things[game.things.indexOf(thing) - 1]) + " to do this!")
        }
        else if (game.things[game.things.indexOf(thing) - 1].includes("money")) {
            window.alert("You need $" + tidy(game.prices[thing]-game.stats[game.things[game.things.indexOf(thing) - 1]]) + " more " + "to do this!")
        }
        else {
            window.alert("You need " + tidy(game.prices[thing]-game.stats[game.things[game.things.indexOf(thing) - 1]]) + " more " + tidy(game.things[game.things.indexOf(thing) - 1]) + "s to do this!")
        }  
    }
}
