const cars = ["<th>First Name: </th> <th>Last Name: </th> <th>Current Date: </th><th>Selected Car: </th><th> Car Image: </th>"];
function addCar (){
    let FirstName = document.getElementById('fName');
    let LastName = document.getElementById('lName');
    let date1 = document.getElementById('date');
    let SelectedCar = document.getElementById('carName');
    let carImg = document.getElementById('img');
    addCarToList (FirstName,LastName,date1,SelectedCar,carImg);
    /* console.log(FirstName.value , LastName.value, date1.value, SelectedCar.value, carImg.value); */
    table.innerHTML=nextRow(FirstName,LastName,date1,SelectedCar,carImg);
    resetForm(FirstName,LastName,date1,SelectedCar,carImg);
}

12
function addCarToList (FirstName,LastName,date1,SelectedCar,carImg){
    let car = "";
    car+="<tr>";
    car+="<td>"+FirstName.value+"</td>";
    car+="<td>"+LastName.value+"</td>";
    car+="<td>"+date1.value+"</td>";
    car+="<td>"+SelectedCar.value+"</td>";
    car+="<td><img src='"+carImg.value+ "'</td>";
    car+="</tr>"
    cars.push(car);
}

function nextRow(){
    let car="";
    for (let i = 0; i<cars.length; i++){
        car+= cars[i];
    }
    return car;
}

function resetForm(FirstName,LastName,date1,SelectedCar,carImg){
    FirstName.value="";
    LastName.value="";
    date1.value=null;
    SelectedCar.value=null;
    carImg.value="";
    FirstName.focus();
}

function delLast(){
    if (cars.length >1){
        cars.pop();
        table.innerHTML=cars;
    }
}


function selectedColor(){
    let color = document.getElementById('colors');
    document.body.style.backgroundColor = color.value;
}

