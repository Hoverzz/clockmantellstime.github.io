
document.addEventListener("keyup", function(event) {
    if (event.keyCode === 49) {
        upgrade();
    }
    if (event.keyCode === 83) {
        if (document.getElementById("game").style.visibility === "visible"){
            saveGame();
            window.alert("Game has been saved!");
        }
    }
    if (event.keyCode === 82) {
        
        if (document.getElementById("game").style.visibility === "visible"){
            resetGame();
        }
    }
    if (event.keyCode === 76) {
        loadGame();
    }
});
                
let stats = {
    
    money: 0,
    upgrade: 1,
    pretige: 0,

    printer: 0,
    builder: 0,
    manager: 0,

    mk1: 0,
    mk2: 0,
    mk3: 0,
    mk4: 0,
    mk5: 0,

    mk1Lvl: 1,
    mk2Lvl: 1,
    mk3Lvl: 1,
    mk4Lvl: 1,
    mk5Lvl: 1,                
    
    earnPrinter: 5,
    mk1Earn: 10000,
    mk2Earn: 500000,
    mk3Earn: 5000000,
    mk4Earn: 2500000000,
    mk5Earn: 50000000000,

    has: false,
    has1: false,

}

let prices = {
    upgrade: 1000,
    prestige: 1000000000000000000,

    printer: 1000,
    builder: 25000,
    manager: 100000,

    mk1: 500000,
    mk2: 15000000,
    mk3: 100000000,
    mk4: 50000000000,
    mk5: 1000000000000,

    has: 10000,
    has1: 100000
}

let automations = {
    mk1: setInterval(function(){
        change("money",stats.mk1*stats.mk1Earn)
    },1000),  
    mk2: setInterval(function(){
        change("money",stats.mk2*stats.mk2Earn)
    },1000),    
    mk3: setInterval(function(){
        change("money",stats.mk3*stats.mk3Earn)
    },1000),        
    mk4: setInterval(function(){
        change("money",stats.mk4*stats.mk4Earn)
    },1000),  
    mk5: setInterval(function(){
        change("money",stats.mk5*stats.mk5Earn)
    },1000),

    printer: setInterval(function(){
        change("money",stats.printer * stats.earnPrinter)
    },1000),
    
    builder: setInterval(function() {
        if(stats.money >= prices.mk5){
            if (stats.money/prices.mk5 >= stats.builder) {
                change("mk5",stats.builder);
                change("money",-(stats.builder * prices.mk5));
            }
            else{
                change("mk5",Math.floor(stats.money/prices.mk5));
                change("money",-(Math.floor(stats.money/prices.mk5)*prices.mk5));
            }
            
        }
        if(stats.money >= prices.mk4){
            if (stats.money/prices.mk4 >= stats.builder) {
                change("mk4",stats.builder);
                change("money",-(stats.builder * prices.mk4));
            }
            else{
                change("mk4",Math.floor(stats.money/prices.mk4));
                change("money",-(Math.floor(stats.money/prices.mk4)*prices.mk4));
            }
            
        }  
        if(stats.money >= prices.mk3){
            if (stats.money/prices.mk3 >= stats.builder) {
                change("mk3",stats.builder);
                change("money",-(stats.builder * prices.mk3));
            }
            else{
                change("mk3",Math.floor(stats.money/prices.mk3));
                change("money",-(Math.floor(stats.money/prices.mk3)*prices.mk3));
            }
            
        }
        if(stats.money >= prices.mk2){
                if (stats.money/prices.mk2 >= stats.builder) {
                    change("mk2",stats.builder);
                    change("money",-(stats.builder * prices.mk2));
                }
                else{
                    change("mk2",Math.floor(stats.money/prices.mk2));
                    change("money",-(Math.floor(stats.money/prices.mk2)*prices.mk2));
                }
                
        } 
        if(stats.money >= prices.mk1){
            if (stats.money/prices.mk1 >= stats.builder) {
                change("mk1",stats.builder);
                change("money",-(stats.builder * prices.mk1));
            }
            else{
                change("mk1",Math.floor(stats.money/prices.mk1));
                change("money",-(Math.floor(stats.money/prices.mk1)*prices.mk1));
            }
        
        }         
    },30000),
    
    
    
    manager: setInterval(function(){
        if(stats.money >= prices.builder){
            if (stats.money/prices.builder >= stats.manager) {
                change("builder",stats.manager);
                change("money",-(stats.manager * prices.builder));
            }
            else{
                change("builder",Math.floor(stats.money/prices.builder));
                change("money",-(Math.floor(stats.money/prices.builder)*prices.builder));
            }
            
        }                
        if(stats.money >= prices.printer){
            if (stats.money/prices.printer >= stats.manager) {
                change("printer",stats.manager);
                change("money",-(stats.manager * prices.printer));
            }
            else{
                change("printer",Math.floor(stats.money/prices.printer));
                change("money",-(Math.floor(stats.money/prices.printer)*prices.printer));
            }
            
        }
        
    },60000),
}   

function change(thing,howMuch) {
    stats[thing] += howMuch;
    reload()
}

function hire(thing) {
    if (stats.money >= prices[thing]) {
        change(thing,1);
        change("money",-(prices[thing]));
        reload();
        
    }
    else{
        window.alert("You need " + num2txt(prices[thing]- stats.money) + " more money!");
    }
}

function upgrade() {
    if (stats.money >= prices.upgrade) {
        stats.upgrade ++;
        stats.money -= prices.upgrade;
        reload();
    }
    else {
        window.alert("You need " + (num2txt(prices.upgrade-stats.money)) + " more money to do this!")
    }
}

function num2txt(num) {
    const suffixes = [" thousand"," million"," billion"," trillion"," quadrillion"," quintillion"," sextillion"," septillion", " octillion"," nontillion"," dectillion"];
    let n = String(num);
    let txt = 0
    
    if (num > 999) {
        if ((n.length-1) % 3 === 0) {
            let first = n.charAt(0);
            let second = n.charAt(1);
            let suffix = suffixes[((n.length-1)/3)-1]
            txt = first+"."+second + suffix;
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
            let suffix = suffixes[((n.length-3)/3)-1]
            txt = first +second+ third+ suffix
        }
    }
else{
    return num
}
    
    
return txt
} 

function reload() {
    document.getElementById("moneyDisplay").innerHTML = "$"+num2txt(stats.money);
    document.getElementById("printerDisplay").innerHTML = "Money printers: " + num2txt(stats.printer);
    document.getElementById("builderDisplay").innerHTML = "Builders: " + num2txt(stats.builder);
    document.getElementById("managerDisplay").innerHTML = "Managers: " + num2txt(stats.manager);
    document.getElementById("mk1Display").innerHTML = "mk1 factories: " + num2txt(stats.mk1);
    document.getElementById("mk2Display").innerHTML = "mk2 factories: " + num2txt(stats.mk2);
    document.getElementById("mk3Display").innerHTML = "mk3 factories: " + num2txt(stats.mk3);
    document.getElementById("mk4Display").innerHTML = "mk4 factories: " + num2txt(stats.mk4);
    document.getElementById("mk5Display").innerHTML = "mk5 factories: " + num2txt(stats.mk5);
    document.getElementById("upgradeDisplay").innerHTML = "Upgrade printer, costs $" + num2txt(prices.upgrade) + "! Your printer prints $" + num2txt(stats.upgrade) + " at a time";
    document.getElementById("printer").innerHTML = "Money printer: Someone who prints $"+num2txt(stats.earnPrinter)+" every second, costs " + num2txt(prices.printer) + "!";
    document.getElementById("builder").innerHTML = "Builder: Someone who automaticly builds factories if you have enough money for them every 15 seconds, costs " + num2txt(prices.builder) + "!";
    document.getElementById("manager").innerHTML = "Manager: Someone who automaticly hires printers and builders every minute if you can, costs " + num2txt(prices.manager) + "!";   
    document.getElementById("mk1").innerHTML = "Mk1 factory: A basic factory that prints $"+num2txt(stats.mk1Earn)+" every second, costs " + num2txt(prices.mk1) + "!";
    document.getElementById("mk2").innerHTML = "Mk2 factory: a factory that can print $"+num2txt(stats.mk2Earn)+" every second, costs " + num2txt(prices.mk2) + "!"; 
    document.getElementById("mk3").innerHTML = "Mk3 factory: a slightly advanced factory that can print $"+num2txt(stats.mk3Earn)+" every second, costs " + num2txt(prices.mk3) + "!";
    document.getElementById("mk4").innerHTML = "Mk4 factory: an advanced factory that can produce $"+num2txt(stats.mk4Earn)+" every second, costs a whopping " + num2txt(prices.mk4) + "!";
    document.getElementById("mk5").innerHTML = "Mk5 factory: A super edvanced factory that can print $"+num2txt(stats.mk5Earn) +" every second, but it isn't cheap!";
}     

function autoUpgrade() {
    if (stats.has && document.getElementById("ez1").innerHTML === "buy") {
            t = setInterval(function(){if(stats.money >= 1000){stats.upgrade++;stats.money = stats.money - 1000;} },.001); 
            document.getElementById("ez1").innerHTML = "on";
            stats.has = false;
            setTimeout(function() {clearInterval(t); document.getElementById("ez1").innerHTML = "buy";},60000);
            

    }
    else{
        if (stats.money >= prices.has&& document.getElementById("ez1").innerHTML === "buy") {
            
            if (confirm("Do you want to but this for $" +num2txt(prices.has) + "? lasts for 60 seconds")  ) {
                stats.has = true;
                stats.money -= prices.has;
            }
            else{
                window.alert("Your loss");
            }
        }
        else{
            window.alert("You need to buy it for $" + num2txt(prices.has)+ " or you already have it on");
        }
    }
}

function autoPrintMoney() {
    
    if (stats.has1 && document.getElementById("ez2").innerHTML === "buy")  {
        var x = setInterval(function() {change("money",stats.upgrade)},.001);
        document.getElementById("ez2").innerHTML = "on";
        stats.has1 = false;
        setTimeout(function() {clearInterval(x); document.getElementById("ez2").innerHTML = "buy";},60000);
        
    }
    else{
        if (stats.money >= prices.has1 && document.getElementById("ez2").innerHTML === "buy") {
        
            if (confirm("Do you want to but this for $" +num2txt(prices.has) + "? lasts for 60 seconds")) {
                stats.has1 = true;
                stats.money -= prices.has1;
            }
            else{
                window.alert("Your loss");
            }
        }
        else{
            window.alert("You need to buy it for $" + num2txt(prices.has1) + " or you already have it on");
        }
    }
}

function levelUp(thing) {
    if (stats.money >= (prices[thing]*10)){
        if (stats[thing+"Lvl"] == 6) {
            window.alert("Your factory is at max level!")
            document.getElementById(thing+"Upgrade").parentNode.removeChild(document.getElementById(thing+"Upgrade"));
        }
        else{
            stats[thing+"Lvl"] += 1;
            change("money",-(prices[thing]*10))
            stats[thing+"Earn"] = Math.floor(stats[thing+"Earn"] * 1.5);
            reload();
        }
    }  
    else{
        window.alert("You need " + num2txt((prices[thing]*10)-stats.money) + " to do this!");
    }
}

function start() {
    if (confirm("Are you sure?")) {
        document.getElementById("game").style.visibility = "visible";
        document.getElementById("start").style.visibility = "hidden";
        document.getElementById("body").style.backgroundColor = "white";
        document.getElementById("start1").style.visibility = "hidden";
    }
    
}

function saveGame() {
        
    localStorage.setItem("stats",JSON.stringify(stats));
}

function loadGame() {
    var data = JSON.parse(localStorage.getItem("stats"));
    try{
        stats.money = data.money;
        stats.upgrade = data.upgrade;
        stats.printer = data.printer;
        stats.builder = data.builder;
        stats.manager = data.manager;
        stats.mk1 = data.mk1;
        stats.mk2 = data.mk2
        stats.mk3 = data.mk3
        stats.mk4 = data.mk4
        stats.mk5 = data.mk5
        stats.mk1Lvl = data.mk1Lvl
        stats.mk2Lvl = data.mk2Lvl
        stats.mk3Lvl = data.mk3Lvl
        stats.mk4Lvl = data.mk4Lvl
        stats.mk5Lvl = data.mk5Lvl                        
        stats.earnPrinter = data.earnPrinter
        stats.mk1Earn = data.mk1Earn
        stats.mk2Earn = data.mk2Earn
        stats.mk3Earn = data.mk3Earn
        stats.mk4Earn = data.mk4Earn
        stats.mk5Earn = data.mk5Earn
        stats.has = data.has
        stats.has1 = data.has1

        
    }
    catch(error){
        window.alert("no save found!")
    }
}           

function resetGame() {
    if (confirm("Are you sure you want to reset?")) {
        let stats = {
    
            money: 0,
            upgrade: 1,

            printer: 0,
            builder: 0,
            manager: 0,

            mk1: 0,
            mk2: 0,
            mk3: 0,
            mk4: 0,
            mk5: 0,

            mk1Lvl: 1,
            mk2Lvl: 1,
            mk3Lvl: 1,
            mk4Lvl: 1,
            mk5Lvl: 1,                
            
            earnPrinter: 5,
            mk1Earn: 10000,
            mk2Earn: 500000,
            mk3Earn: 5000000,
            mk4Earn: 2500000000,
            mk5Earn: 50000000000,

            has: false,
            has1: false,

        }
        localStorage.setItem("stats",JSON.stringify(stats));
        loadGame();
    }   
}

function prestige() {
    if (stats.money > prices.prestige * prestige) {
        stats.mk1Earn = math.floor((stats.mk1Earn * (1 + (2*Math.random))))
        stats.mk2Earn = math.floor((stats.mk2Earn * (1 + (2*Math.random))))
        stats.mk3Earn = math.floor((stats.mk3Earn * (1 + (2*Math.random))))
        stats.mk4Earn = math.floor((stats.mk4Earn * (1 + (2*Math.random))))
        stats.mk5Earn = math.floor((stats.mk5Earn * (1 + (2*Math.random))))
    }
}