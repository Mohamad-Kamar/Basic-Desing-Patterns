class Phone{
    constructor(name){
        this.name = name
        this.data = `Data on ${name}'s Phone is: `
    }

    update(weatherData){
        console.log(this.data + weatherData)
    }
}

class Tablet{
    constructor(name){
        this.name = name
        this.data = `Data on ${name}'s Tablet is: `
    }

    update(weatherData){
        console.log(this.data + weatherData)
    }
}

class TV{
    constructor(name){
        this.name = name
        this.data = `Data on ${name}'s TV is: `
    }

    update(weatherData){
        console.log(this.data + weatherData)
    }
}



module.exports = {Phone, Tablet, TV}