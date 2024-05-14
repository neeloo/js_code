// binding data and function in single unit khow as encapsulation
class E{
    constructor(){
        var name;
        var id;
    }
    setName(name){
        this.name=name;
    }
    getName(){
        return this.name;
    }
    setId(id){
        this.id=id;
    }
    getId(){
        return this.id;
    }
}

var e=new E();
e.setName("ram")
e.setId(123)
console.log(e.getName());
console.log(e.getId())



