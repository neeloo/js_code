// In JavaScript, whenever a function is created the prototype property is added to that function automatically

function Emp(fname,lname){
    this.fname=fname;
    this.lname=lname;
}
Emp.prototype.fullname=function(){
    return this.fname+" "+this.lname;
}
var e=new Emp( "shiv","kumar");
console.log(e.fullname())