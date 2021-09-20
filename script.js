document.addEventListener("keyup", function(event) {

                
                
                if (event.keyCode === 49) {
                    upgrade();
                }
                if (event.keyCode === 50) {
                    ez();
                }
                if (event.keyCode === 51) {
                    ez1();
                }
            });
                           
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
                earnMk1: 10000,
                earnMk2: 500000,
                earnMk3: 5000000,
                earnMk4: 2500000000,
                earnMk5: 50000000000,

                has: false,
                has1: false,

            }
            
            let prices = {
                upgrade: 1000,

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
                    change("money",stats.mk1 * stats.earnMk1)
                },1000),
                mk2: setInterval(function(){
                    change("money",stats.mk2 *stats.earnMk2)
                },1000),
                mk3: setInterval(function(){
                    change("money",stats.mk3 * stats.earnMk3)
                },1000),
                mk4: setInterval(function(){
                    change("money",stats.mk4 * stats.earnMk4)
                },1000),
                mk5: setInterval(function(){
                    change("money",stats.mk5 * stats.earnMk5)
                },1000),

                printer: setInterval(function(){
                    change("money",stats.printer * stats.earnPrinter)
                },1000),
                
                builder: setInterval(function() {
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
                        
                },15000),
                
                manager: setInterval(function(){
                    if(stats.money >= prices.manager){
                        if (stats.money/prices.manager >= stats.manager) {
                            change("printer",stats.manager);
                            change("money",-(stats.manager * prices.manager));
                        }
                        else{
                            change("printer",Math.floor(stats.money/prices.manager));
                            change("money",-(Math.floor(stats.money/prices.manager)*prices.manager));
                        }
                        
                    }
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
                    window.alert("You need " + (prices[thing]- stats.money) + " more money!");
                }
            }

            function upgrade() {
                if (stats.money >= prices.upgrade) {
                    stats.upgrade ++;
                    stats.money -= prices.upgrade;
                }
                else {
                    window.alert("You need " + (prices.upgrade-stats.money) + " more money to do this!")
                }
            }

            function reload() {
                document.getElementById("moneyDisplay").innerHTML = "$"+stats.money;
                document.getElementById("printerDisplay").innerHTML = "Money printers: " + stats.printer;
                document.getElementById("builderDisplay").innerHTML = "Builders: " + stats.builder;
                document.getElementById("managerDisplay").innerHTML = "Managers: " + stats.manager;
                document.getElementById("mk1Display").innerHTML = "mk1 factories: " + stats.mk1;
                document.getElementById("mk2Display").innerHTML = "mk2 factories: " + stats.mk2;
                document.getElementById("mk3Display").innerHTML = "mk3 factories: " + stats.mk3;
                document.getElementById("mk4Display").innerHTML = "mk4 factories: " + stats.mk4;
                document.getElementById("mk5Display").innerHTML = "mk5 factories: " + stats.mk5;
                document.getElementById("upgradeDisplay").innerHTML = "Upgrade printer, costs $" + prices.upgrade + "! You have " + stats.upgrade;
                document.getElementById("printer").innerHTML = "Money printer: Someone who prints $"+stats.earnPrinter+" every second, costs " + prices.printer + "!";
                document.getElementById("builder").innerHTML = "Builder: Someone who automaticly builds factories if you have enough money for them every 15 seconds, costs " + prices.builder + "!";
                document.getElementById("manager").innerHTML = "Manager: Someone who automaticly hires printers and builders every minute if you can, costs " + prices.manager + "!";   
                document.getElementById("mk1").innerHTML = "Mk1 factory: A basic factory that prints $"+stats.earnMk1+" every second, costs " + prices.mk1 + "!";
                document.getElementById("mk2").innerHTML = "Mk2 factory: a factory that can print $"+stats.earnMk2+" every second, costs " + prices.mk2 + "!"; 
                document.getElementById("mk3").innerHTML = "Mk3 factory: a slightly advanced factory that can print $"+stats.earnMk3+" every second, costs " + prices.mk3 + "!";
                document.getElementById("mk4").innerHTML = "Mk4 factory: an advanced factory that can produce $"+stats.earnMk4+" every second, costs a whopping " + prices.mk4 + "!";
                document.getElementById("mk5").innerHTML = "Mk5 factory: solve all your money problems with this factory!";
                document.getElementById("upgradeMk1").innerHTML = "&uarr;";
                document.getElementById("upgradeMk2").innerHTML = "&uarr;";
                document.getElementById("upgradeMk3").innerHTML = "&uarr;";
                document.getElementById("upgradeMk4").innerHTML = "&uarr;";
                document.getElementById("upgradeMk5").innerHTML = "&uarr;";
            }     

            function start() {
                if (confirm("Are you sure?")) {
                    document.getElementById("game").style.visibility = "visible";
                    document.getElementById("start").style.visibility = "hidden";
                }
               
            }

            function ez() {
                if (stats.has && document.getElementById("ez1").innerHTML === "buy") {
                        t = setInterval(function(){if(stats.money >= 1000){stats.upgrade++;stats.money = stats.money - 1000;} },1); 
                        document.getElementById("ez1").innerHTML = "on";
                        stats.has = false;
                        setTimeout(function() {clearInterval(t); document.getElementById("ez1").innerHTML = "buy";},60000);
                        
          
                }
                else{
                    if (stats.money >= prices.has&& document.getElementById("ez1").innerHTML === "buy") {
                        
                        if (confirm("Do you want to but this for $" +prices.has + "? lasts for 60 seconds")  ) {
                            stats.has = true;
                            stats.money -= prices.has;
                        }
                        else{
                            window.alert("Your loss");
                        }
                    }
                    else{
                        window.alert("You need to buy it for $" + prices.has+ " or you already have it on");
                    }
                }
            }
            
            function ez1() {
                
                if (stats.has1 && document.getElementById("ez2").innerHTML === "buy")  {
                    var x = setInterval(function() {change("money",stats.upgrade)},1);
                    document.getElementById("ez2").innerHTML = "on";
                    stats.has1 = false;
                    setTimeout(function() {clearInterval(x); document.getElementById("ez2").innerHTML = "buy";},60000);
                    
                }
                else{
                    if (stats.money >= prices.has1 && document.getElementById("ez2").innerHTML === "buy") {
                    
                        if (confirm("Do you want to but this for $" +prices.has + "? lasts for 60 seconds")) {
                            stats.has1 = true;
                            stats.money -= prices.has1;
                        }
                        else{
                            window.alert("Your loss");
                        }
                    }
                    else{
                        window.alert("You need to buy it for $" + prices.has1 + " or you already have it on");
                    }
                }
            }

            function lol() {
                if (stats.money >= 1000) {
                    upgrade();
                }
            }

            function levelUp(thing) {
                if (stats.money >= (prices[thing] * 10)) {
                    change((thing+"Lvl"),stats["earn"+(thing.charAt(0).toUpperCase()+thing.charAt(1) +  thing.charAt(2))]/2);
                    change(thing+"Lvl",1);
                    change("money",-(prices[thing] * 10));
                }
                else{
                    window.alert("d")
                }
            }
