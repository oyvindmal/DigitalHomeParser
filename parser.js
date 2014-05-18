var fs  = require("fs");

var obj = JSON.parse(fs.readFileSync('config.json', 'utf8'));

sendInput("lol2");

function sendInput(input)
{
    var match;
    
    obj.forEach(function(m) {
       if(m.input === input) {
           match = m;
       }
    });
    
    if(match === undefined) {
        console.log("No match");
    }
    else {
        var commands = match.commands;
        commands.forEach(function (com) {
            if(com.type === "TelldusOn"){
                TelldusOn(com.SwitchId);
            }
            
            else if(com.type === "TelldusOff") {
                TelldusOff(com.SwitchId);
            }
            else if(com.type === "HueOff") {
                HueOff(com.BulbId); 
            }
            else {
                console.log("Command not defined (" + com.type + ")");
            }
        })
    }
}

function TelldusOn(swid) {
    console.log("Switching on Telldus Switch with ID " + swid);
}

function TelldusOff(swid) {
    console.log("Switching off Telldus Switch with ID " + swid);
}

function HueOff(blid) {
    console.log("Switching off Hue light bulb with ID " + blid);
}
