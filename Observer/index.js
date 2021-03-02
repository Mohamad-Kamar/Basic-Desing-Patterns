const   {WeatherStation}  = require('./WeatherStation');
const { Phone, Tablet, TV } = require('./Devices');


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function main(){
 
    let station = new WeatherStation();
    let cphone = new Phone("Chadi");
    let stablet = new Tablet("Salam")
    let mtv = new TV("Mostafa");
    station.add(cphone)
    station.add(stablet)
    station.add(mtv)
    // station.notify("sunny");


    readNotification(station)
}

function readNotification(station){
    console.log("What's the weather?");
    rl.on('line', (input) => {
        if(input == "quit"){
            rl.close()
            return;
        }
        station.notify(input);
        console.log("\n");

        console.log("What's the weather?");

    });
}
main()