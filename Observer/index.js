const   {WeatherStation}  = require('./WeatherStation');
const { Phone, Tablet, TV } = require('./Devices');


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function main(){
 
    let station = new WeatherStation();
    let phone = new Phone();
    let tablet = new Tablet()
    let tv = new TV();
    station.add(phone)
    station.add(tablet)
    station.add(tv)
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