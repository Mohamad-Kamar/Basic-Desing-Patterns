
//each class has its unique implemetation of the methods to prepare a pizza
class CheesePizza{
    prepare(){
        console.log("Preparing Cheese Pizza")
    }
    bake(){
        console.log("Baking Cheese Pizza")

    }
    cut(){
        console.log("Cutting Cheese Pizza")

    }
    box(){
        console.log("Boxing Cheese Pizza")
    }
}

class PeppePizza{
    prepare(){
        console.log("Preparing Pepperoni Pizza")
    }
    bake(){
        console.log("Baking Pepperoni Pizza")

    }
    cut(){
        console.log("Cutting Pepperoni Pizza")

    }
    box(){
        console.log("Boxing Pepperoni Pizza")
    }
}


class ClamPizza{
    prepare(){
        console.log("Preparing Clam Pizza")
    }
    bake(){
        console.log("Baking Clam Pizza")

    }
    cut(){
        console.log("Cutting Clam Pizza")

    }
    box(){
        console.log("Boxing Clam Pizza")
    }
}


class VegiPizza{
    prepare(){
        console.log("Preparing Vegi Pizza")
    }
    bake(){
        console.log("Baking Vegi Pizza")

    }
    cut(){
        console.log("Cutting Vegi Pizza")

    }
    box(){
        console.log("Boxing Vegi Pizza")
    }
}

module.exports = {
    CheesePizza,
    PeppePizza,
    ClamPizza,
    VegiPizza
}