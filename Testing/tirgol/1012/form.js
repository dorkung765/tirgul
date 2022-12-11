const  cars=["<th>Full Name: </th><th>Phone Number: </th><th>Car Image:</th><th>Selected Car: </th><th>Submitted on(Hour): </th><th>Date: </th>"];

function RentCar(){
    let FullName = document.getElementById("fName");
    let Tell = document.getElementById('pNumber');
    let image = document.getElementById('img');
    let Skoda = document.getElementById('skoda');
    let Bmw = document.getElementById('bmw');
    let Tesla = document.getElementById('tesla');
    let Audi = document.getElementById('audi');
    let time = new Date();
    let day = time.getDate();
    let hour = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let list = document.querySelectorAll('input[name="car"]:checked');
    let checkBox=[];
    list.forEach((checkbox)=>{
        checkBox.push(checkbox.value);
    });
    addToList(FullName,Tell,image,checkBox,hour,minutes,seconds,day);
    table.innerHTML = newRow(FullName,Tell,image,checkBox,hour,minutes,seconds,day);
    resetForm(FullName,Tell,image,Skoda,Bmw,Tesla,Audi);
}

function addToList(FullName,Tell,image,checkBox,hour,minutes,seconds,day){
    
    let content ="";
    content+="<tr>";
    content+="<td>"+FullName.value+"</td>";
    content+="<td><a href='tel:"+Tell.value+"'>"+Tell.value+"</a></td>";
    content+="<td><img src='"+image.value+"'</td>";
    content+="<td>"+checkBox+"</td>";
    content+="<td>"+hour+":"+minutes+":"+seconds+"</td>";
    content+="<td>"+day+"</td>";
    content+="</tr>"
    cars.push(content);
}

function newRow(){
    let content="";
    for (let i = 0; i<cars.length;i++){
        content+=cars[i];
    }
    return content;
}

function resetForm(FullName,Tell,image,Skoda,Bmw,Tesla,Audi){
    FullName.value="";
    Tell.value="";
    image.value="";
    Skoda=null;
    Bmw=null;
    Audi=null;
    Tesla=null;



}


