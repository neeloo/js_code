// A javaScript object is an entity having state and behavior (properties and method).
//  For example: car, pen, bike, chair, glass, keyboard, monitor etc.

// There are 3 ways to create objects.
/**
 * By object literal
 * By creating instance of Object directly (using new keyword)
  *By using an object constructor (using new keyword)

 */
// 1  By object literal
/*
emp={id:10,name:"ns",age:26};
console.log("id:"+emp.id + " name: "+emp.name+" Age: "+emp.age);

// 2-By creating instance of Object directly 
var n=new Object();
n.id=10;
n.name="ravi";
n.age=25;
console.log("id:"+n.id + " name:"+n.name+" Age:"+n.age);

// 3-By using an object constructor 
function e(id,name,age){
    this.id=id
    this.name=name;
    this.age=age;
}
emp=new e (12,"ganesh",26);
console.log("id:"+emp.id + " name: "+emp.name+" Age: "+emp.age);

*/

// Defining method in JavaScript Object*****************

function emp(id,name,salary){  
    this.id=id;  
    this.name=name;  
    this.salary=salary;  
      
    this.changeSalary=changeSalary;  
    function changeSalary(otherSalary){  
    this.salary=otherSalary;  
    }  
    }  
    e=new emp(103,"Sonoo Jaiswal",30000);  
   console.log(e.id+" "+e.name+" "+e.salary);  
    e.changeSalary(45000);  
   console.log(+e.id+" "+e.name+" "+e.salary);  
    