class Phone{
    constructor(){
        this.data = "Data on the Phone is: "
    }

    update(weatherData){
        console.log(this.data + weatherData)
    }
}

class Tablet{
    constructor(){
        this.data = "Data on the Tablet is: "
    }

    update(weatherData){
        console.log(this.data + weatherData)
    }
}

class TV{
    constructor(){
        this.data = "Data on the TV is: "
    }

    update(weatherData){
        console.log(this.data + weatherData)
    }
}



module.exports = {Phone, Tablet, TV}