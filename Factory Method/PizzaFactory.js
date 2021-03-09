const {    
    CheesePizza,
    PeppePizza,
    ClamPizza,
    VegiPizza
} = require('./PizzaTypes');


class SimplePizzaFactory{
   createPizza(type){
        let pizza = null;
        if (type == "cheese"){
            pizza = new CheesePizza();
        }
        if (type == "pepperoni"){
            pizza = new PeppePizza();
        }

        if (type == "clam"){
            pizza = new ClamPizza();
        }

        if (type == "vegi"){
            pizza = new VegiPizza();
        }
        return pizza
    }
    
}

module.exports = SimplePizzaFactory;