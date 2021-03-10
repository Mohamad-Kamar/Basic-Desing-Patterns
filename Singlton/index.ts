class Singlton{
    private static instance : Singlton;
    db : {}[];
    private constructor(){
        this.db = new Array();
    }

    static getInstance(){
        if (!this.instance){
            this.instance = new Singlton();
        }
        return this.instance;
    }

}


class FirstPage{
    singlton:Singlton;
    constructor(){
        this.singlton = Singlton.getInstance()
    }
    add(str){
        this.singlton.db.push({FistPageData:str})
    }
    print(){
        this.singlton.db.forEach(console.log)
    }
}


class SecondPage{
    singlton:Singlton;
    constructor(){
        this.singlton = Singlton.getInstance()
    }
    add(str){
        this.singlton.db.push({SecondPageData:str})
    }
    print(){
        this.singlton.db.forEach(console.log)
    }
}


function main(){
    let fPage = new FirstPage();
    let sPage = new SecondPage();

    fPage.add("first test");
    sPage.add("second test");

    fPage.add("third test");
    
    console.log("FIRST PAGE STUFF")
    console.log("========================================")
    fPage.print();
    console.log("SECOND PAGE STUFF")
    console.log("========================================")
    sPage.print();

}

main()