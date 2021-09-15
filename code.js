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

                has: false,
                has1: false,

            }
            let prices = {
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
            
            var mk1 = setInterval(function(){
                change("money",stats.mk1 * 10000)
            },1000);
            var mk2 = setInterval(function(){
                change("money",stats.mk2 * 500000)
            },100);
            var mk3 = setInterval(function(){
                change("money",stats.mk3 * 5000000)
            },10);
            var mk4 = setInterval(function(){
                change("money",stats.mk4 * 2500000000)
            },1);
            var mk5 = setInterval(function(){
                change("money",stats.mk5 * 50000000000)
            },.01);

            var printer = setInterval(function(){
                change("money",stats.printer * 5)
            },1000);
            
            var builder = setInterval(function() {
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
                     
            },15000)
            
            var manager = setInterval(function(){
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
                
            },60000)

            function change(thing,howMuch) {
                stats[thing] += howMuch;
                reload()
            }
            
            function hire(thing) {
                if (stats.money >= prices[thing]) {
                    change(thing,1);
                    change("money",-(prices[thing]));
                    console.log("User bought a " + thing);
                    reload();
                    
                }
                else{
                    window.alert("You need " + (prices[thing]- stats.money) + " more money!");
                }
            }

            function upgrade() {
                if (stats.money >= 1000) {
                    stats.upgrade ++;
                    stats.money -= 1000;
                }
                else {
                    window.alert("You need " (1000-stats.money) + " more money to do this!")
                }
            }

            function reload() {
                document.getElementById("moneyDisplay").innerHTML = "$" + stats.money;
                document.getElementById("printerDisplay").innerHTML = "Money printers: " + stats.printer;
                document.getElementById("builderDisplay").innerHTML = "Builders: " + stats.builder;
                document.getElementById("managerDisplay").innerHTML = "Managers: " + stats.manager;
                document.getElementById("mk1Display").innerHTML = "mk1 factories: " + stats.mk1;
                document.getElementById("mk2Display").innerHTML = "mk2 factories: " + stats.mk2;
                document.getElementById("mk3Display").innerHTML = "mk3 factories: " + stats.mk3;
                document.getElementById("mk4Display").innerHTML = "mk4 factories: " + stats.mk4;
                document.getElementById("mk5Display").innerHTML = "mk5 factories: " + stats.mk5;
                document.getElementById("upgradeDisplay").innerHTML = stats.upgrade;
            }
            
            function load() {
                document.getElementById("printer").innerHTML = "Money printer: Someone who prints $5 every second, costs " + prices.printer + "!";
                document.getElementById("builder").innerHTML = "Builder: Someone who automaticly builds factories if you have enough money for them every 15 seconds, costs " + prices.builder + "!";
                document.getElementById("manager").innerHTML = "Manager: Someone who automaticly hires printers and builders every minute if you can, costs " + prices.manager + "!";   
                document.getElementById("mk1").innerHTML = "Mk1 factory: A basic factory that prints $10k every second, costs " + prices.mk1 + "!";
                document.getElementById("mk2").innerHTML = "Mk2 factory: a factory that can print $5 million every second, costs " + prices.mk2 + "!"; 
                document.getElementById("mk3").innerHTML = "Mk3 factory: a slightly advanced factory that can print $500 million every second, costs " + prices.mk3 + "!";
                document.getElementById("mk4").innerHTML = "Mk4 factory: an advanced factory that can produce $2.5 trillion every second, costs a whopping " + prices.mk4 + "!";
                document.getElementById("mk5").innerHTML = "Mk5 factory: solve all your money problems with this factory, but it is not cheap!"
                reload()
      
            }

            function start() {
                if (confirm("Are you sure?")) {
                    document.getElementById("game").style.visibility = "visible";
                    document.getElementById("start").style.visibility = "hidden";
                }
               
            }

            function ez() {
                if (stats.has && document.getElementById("ez1").innerHTML != "on") {
                        t = setInterval(function(){if(stats.money >= 1000){stats.upgrade++;stats.money = stats.money - 1000;} },1); 
                        document.getElementById("ez1").innerHTML = "on";
                        setTimeout(function() {clearInterval(t); document.getElementById("ez1").innerHTML = "buy";},60000);
                        stats.has = false;
          
                }
                else{
                    if (stats.money >= prices.has) {
                        
                        if (confirm("Do you want to but this for $" +prices.has + "? lasts for 10 seconds")) {
                            stats.has = true;
                            stats.money -= prices.has;
                        }
                        else{
                            window.alert("Your loss");
                        }
                    }
                    else{
                        window.alert("You need to buy it for $" + prices.has);
                    }
                }
            }
            function ez1() {
                
                if (stats.has1) {
                    var x = setInterval(function() {change("money",stats.upgrade)},1);
                    document.getElementById("ez2").innerHTML = "on";
                    setTimeout(function() {clearInterval(x); document.getElementById("ez2").innerHTML = "buy";},60000);
                    stats.has1 = false;
                }
                else{
                    if (stats.money >= prices.has1) {
                    
                        if (confirm("Do you want to but this for $" +prices.has + "? lasts for 10 seconds")) {
                            stats.has1 = true;
                            stats.money -= prices.has1;
                        }
                        else{
                            window.alert("Your loss");
                        }
                    }
                    else{
                        window.alert("You need to buy it for $" + prices.has);
                    }
                }
            }
