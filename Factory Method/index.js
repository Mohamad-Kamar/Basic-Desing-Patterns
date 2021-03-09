const PizzaStore = require('./PizzaStore');
const PizzaFactory = require("./PizzaFactory")
function main(){
    let pizza = new PizzaStore(new PizzaFactory());
    let cheesePizza = pizza.orderPizza('cheese');
    let vegiPizza = pizza.orderPizza('vegi');
    
}
main()