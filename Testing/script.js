const cars = ["<th>First Name:</th> <th>Last Name:</th> <th>Current Date</th> <th>Selected Car</th> <th>Car Img</th>"];

function addCar() {
    let firstName = document.getElementById("fName");
    let lastName = document.getElementById("lName");
    let date1 = document.getElementById("date");
    let selectedCar = document.getElementById("carName");
    let carImg = document.getElementById("img");
    addCarToList(firstName, lastName, date1, selectedCar , carImg);
    table.innerHTML=nextRow(firstName , lastName , date1 , selectedCar , carImg);
    resetForm(firstName , lastName , date1 , selectedCar , carImg)
    //console.log(firstName.value , lastName.value, date1.value, selectedCar.value, carImg.value);
}

function addCarToList(firstName , lastName , date1 , selectedCar , carImg) {
    let car =""
    car+="<tr>"
    car+="<td>" + firstName.value + "</td>"
    car+="<td>" + lastName.value + "</td>"
    car+="<td>" + date1.value + "</td>"
    car+="<td>" + selectedCar.value + "</td>"
    car+="<td>" + "<img src = '" + carImg.value + "'</td>"
    car+="</tr>"
    cars.push(car);
}

function nextRow() {
    let car  = ""
    for (let i = 0 ; i < cars.length; i++) {
        car+= cars[i]
    }
    return car;
}

function resetForm(firstName , lastName , date1 , selectedCar , carImg) {
    firstName.value = "";
    lastName.value = "";
    date1.value = null;
    selectedCar.value = null;
    carImg.value="";
    firstName.focus();
}

function delLast() {
    cars.pop();
    table.innerHTML = nextRow();
}

function selectedColor() {
    let color = document.getElementById("colors")
    document.body.style.backgroundColor = color.value;
}