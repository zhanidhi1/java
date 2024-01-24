//function myFunction(a,b){
//    return a*b;
//}
//var x=myFunction(3,4);
//document.write(x)



//var myFunction=new Function("a","b","return a*b");
//var x= myFunction(5,3);
//document.write(x)
//displayItems("Dog","Cat","Pony","Hamster","Tortoise");
//function displayItems(v1,v2,v3,v4,v5)
//{
 //   document.write(arguments[0] +"<br>") 
  //  document.write(v2+"<br>")    
    // document.write(v3 +"<br>") 
     //document.write(v4+"<br>") 
     //document.write(v5 +"<br>") 
//}



//displayItems("Dog","Cat","Pony","Hamster","Tortoise");
//function displayItems()
//{
  //  for(j=0;j<displayItems.arguments.length;++j)
    //document.write(displayItems.arguments[j]+"<br>");
//}



//document.write(fixNames("the","DALLAS","CowBoys"))
//function fixNames()
//{
 //   var s="";
  //  for(j=0;j<fixNames.arguments.length;++j)
   // s +=fixNames.arguments[j].charAt(0).toUpperCase() +
   // fixNames.arguments[j].substr(1)
//.toLowerCase() +"";
//return s.substr(0,s.length-1);
//}



//var words =fixNames("the","DALLAS","CowBoys");
//for(j=0;j<words.length;++j)
//document.write(words[j]+"<br>")
//function fixNames()
//{
 //   var s=new Array();
 //   for(j=0;j<fixNames.arguments.length;++j)
  //  s[j]=fixNames.arguments[j].charAt(0).toUpperCase()+
  //  fixNames.arguments[j].substr(1).toLowerCase();
  //  return s;
//}



//var place={
//  name:"Nepal",
//  capital:"Ktm",
//  weather:"Winter"
//};
//document.write(place.name);
//var message = {

//  showMessage:function(val){
//    alert(val);
 // }
//};
//document.write(message.showMessage("hello"))



//var person={
//  firstName:"Nidhi",
 // lastName:"Jha",
 // age:20,
 // getFullName:function(){
 //   return this.firstName+''+this.lastName
 // }
//};
//document.write(person.getFullName())


//person.firstName="Nidhi";person["lastName"]=
//"Jha";
//person.age=20;
//person.getFullName=function(){
//  return this.firstName+''+this.lastName;
//};
//document.write(person.getFullName())
//document.write("<br>")

//function emp(id,name,salary){
//  this.id=id;
//  this.name=name;
//  this.salary=salary;
//}
//e=new emp(103,"Vimal Jaiswal",30000);
//document.write(e.id+""+e.name+""+e.salary);



//var person={
//  firstName:"Nidhi",
//  lastName:"Jha",
//  age:20,
//  getFullName:function(){
//    return this.firstName+''+this.lastName
//  },
//  secondPerson:{address:"ktm",temp_add:"Bkt"}
//};
//document.write(person.secondPerson.address)
//document.write("<br>")



//function changeFirstName(per){
//  per.firstName="Steve";
//}
//var person={firstName:"Bill"};
//changeFirstName(person)
//person.firstName;
//document.write(person.firstName)



//var person={firstName:"John"};
//var anotherPerson=person;
//anotherPerson.firstName="Bill";
//person.firstName;
//document.write(anotherPerson.firstName)
//document.write("<br>")



//var myDate=new Date();
//document.write(myDate.toDateString())      //The toDateString method converts a date to a string:
//document.write(myDate.toTimeString())     //toTimeString method converts the time from the date object to a string



//function Person(first,last,age){
  // this.firstName=first;
  // this.lastName=last;
  // this.age=age;
//}
//Person.prototype.address="ktm";
//var man=new Person("Nidhi","Jha",28)
//document.write(man.address+""+man.firstname)



Date.prototype.myMet=function(){
  if(this.getMonth()==0){this.myProp="January"};
  if(this.getMonth()==1){this.myProp="February"};
  if(this.getMonth()==2){this.myProp="March"};
  if(this.getMonth()==3){this.myProp="April"};
  if(this.getMonth()==4){this.myProp="May"};
  if(this.getMonth()==5){this.myProp="June"};
  if(this.getMonth()==6){this.myProp="July"};
  if(this.getMonth()==7){this.myProp="August"};
  if(this.getMonth()==8){this.myProp="September"};
  if(this.getMonth()==9){this.myProp="October"};
  if(this.getMonth()==10){this.myProp="November"};
  if(this.getMonth()==11){this.myProp="December"}
};
var d=new Date();
d.myMet();
var monthname = d.myProp;
document.write(monthname);




function Student(id,name,address,phone){
  this.id=id;
  this.name=name;
  this.address=address;
  this.phone=phone;
}
  s= new Student(2,"Nidhi","ktm",98120);
  var z=delete(s.address)
  document.write
  document.write(s.id,""+s.name+""+s.address,s.phone);
  console.log(s.address)
