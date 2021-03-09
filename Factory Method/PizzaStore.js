class PizzaStore{
    constructor(factory){
        this.factory = factory;
    }

    orderPizza(type){
        let pizza = this.factory.createPizza(type);
        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.box();
        return pizza;
    }
    //some other pizza related methods
}
module.exports = PizzaStore;