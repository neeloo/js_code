// class E{
//     constructor(id,name){
//         this.id=id;
//         this.name=name;
//     }
//     details(){
//         console.log(this.id+" "+this.name);
//     }
// };
// let e=new E(123,"mina");
// let e1=new E(1234,"manish");
// e.details();
// e1.details();



// A class can be declared once only. If we try to declare class more than one time, it throws an error.
/*
class Employee {
    //Initializing an object  
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    detail() {
        document.writeln(this.id + " " + this.name + "<br>")
    }

}

//passing object to a variable  

var e1 = new Employee(101, "Martin Roy");
var e2 = new Employee(102, "Duke William");
e1.detail(); //calling method  
e2.detail();

//Re-declaring class  
class Employee { }    // this will given error

*/


// ************Class expressions************
// Another way to define a class is by using a class expression. Here,
//  it is not mandatory to assign the name of the class

/*
var emp=class   {  
//Initializing an object  
    constructor(id,name)  {  
      this.id=id;  
      this.name=name;  
    }  
//Declaring method      
detail()  {  
  console.log(this.id+" "+this.name)  ;
    }  
  }  
var e1=new emp(101,"Martin Roy");  
var e2=new emp(102,"Duke William");  
e1.detail(); //calling method  
e2.detail();  
*/

// ////// class expression allows us to re-declare the same class
var emp=class   {   
constructor(id,name)  {  
      this.id=id;  
      this.name=name;  
    }     
detail()  {  
 console.log(this.id+" "+this.name)  ;
    } 
 }  
var e1=new emp(101,"Martin Roy");  
var e2=new emp(102,"Duke William");  
e1.detail(); 
e2.detail();  
  
//Re-declaring class  
var emp=class   {   
    constructor(id,name)   {  
      this.id=id;  
      this.name=name;  
    }  
    detail()  {  
 console.log(this.id+" "+this.name) ; 
    }  
  }   
var e1=new emp(103,"James Bella");  
var e2=new emp(104,"Nick Johnson");  
e1.detail(); 
e2.detail();  
