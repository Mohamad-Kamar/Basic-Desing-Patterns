class PizzaStore{
    constructor(factory){
        this.factory = factory;
    }
//note that to make this pattern a static factory method, all we have to do is to modify the pizza store orderPizza method
//we can create a new factory inside it, and making the method static, therefore bypassing the step of instantiating the class in the first place.
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