class WeatherStation{
    constructor(){
        this.observers = []
    }

    add(observer){
        this.observers.push(observer);
    }

    notify(new_weather){
        for(let observer of this.observers){
            observer.update(new_weather);
        }
    }
}

module.exports = {WeatherStation}
