const carList = ["<th>Car name</th><th> Car Img</th>"];
function addCar(){
    let carName = document.getElementById('carName');  
    let carImg = document.getElementById('carImg');   

//Add new car to list
addToList(carName,carImg);
//create the table from the array
carTable.innerHTML = createTable(carName,carImg);
 //reset the form data
resetForm(carName,carImg);
}
function addToList(carName,carImg){
    let myString ="";
    myString+= "<tr>";
    myString+= "<td>" + carName.value +"</td>";
    myString+= "<td> <img src='"+carImg.value+"'/> </td>";
    myString+= "</tr>";
    carList.push(myString);
}
function createTable(carName,carImg){
    myString = "";
    for (let index=0;index<carList.length;index++){
        myString+= carList[index];
    }
    return myString;
}
function resetForm(carName,carImg){
    carName.value = "";
    carImg.value = "";
    carName.focus();    
}



