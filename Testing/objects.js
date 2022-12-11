var myClient={
    firstName: "Amit",
    lastName: "Tsuk",
    address: "Haifa",
    age: 35
};
console.log(myClient);
console.log(myClient.address);
delete myClient.age;
myClient.address="Natanya";
document.write(myClient);

var myMovie ={
name: "Hagiga ba snuker",
description: "Borekas",
length:90,
Director: {
firstName:"Yehuda",
lastName:"Barkan",
}
};
document.write(myMovie.name +"<br>");
document.write(myMovie.description +"<br>");
document.write(myMovie.length +"<br>");
document.write(myMovie.Director +"<br>");
myMovie.year=1975;
document.write(myMovie.year +"<br>");
delete myMovie.description;
console.log(myMovie);
for(var field in myMovie){
console.log(field);
console.log(myMovie[field]);
document.write(field+"-->"+myMovie[field]+"<br>");
}

var customer={
firstName: "Amit",
lastName: "Tsuk",
phone:"0527975500",
email:"amit@domain.co.il",
creditCard:{
type:"visa",
num:"4580458045804580",
validate:"05/25",
secure:666,
}
};
console.log(customer);
for(var cusField in customer){
if(cusField==="creditCard"){
for (var field in customer.creditCard){
document.write(field+"--->"+customer.creditCard[field]+"<br>");
}
}
else{
document.write(cusField+"--->"+customer[cusField]+"<br>");
}
}

