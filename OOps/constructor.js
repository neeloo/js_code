// JavaScript Constructor Method
// A JavaScript constructor method is a special type of method which is used to initialize and create an object.
//  It is called when memory is allocated for an object.


class E{
    constructor(){
        this.name="javatpoint";
        this.id=123;
    }
}
var e=new E()
console.log(e.name )
console.log(e.id)


// Constructor Method Example: super keyword
//The super keyword is used to call the parent class constructor. Let's see an example.
class CompanyName  {  
  constructor()  {  
    this.company="Javatpoint";  
  }  
}  
class Employee extends CompanyName {  
  constructor(id,name) {  
   super();  
    this.id=id;  
    this.name=name;  
  }   
}     
var emp = new Employee(1,"John");  
console.log(emp.id+" "+emp.name+" "+emp.company);  
 


