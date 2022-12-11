const list=[];

function addCard(){
    let FirstName = document.getElementById('fName');
    let LastName = document.getElementById('lName');
    let date = document.getElementById('date1');
    let hour = document.getElementById('hour');
    let color = document.getElementById('color');
    let image = document.getElementById('img');
    let Div = document.getElementById('divs');
/*     console.log(FirstName.value,LastName.value,date.value,hour.value,color.value,image.value);
 */
    addThing(FirstName,LastName,date,hour,color,image);
    Div.innerHTML= newDiv();
    document.body.style.backgroundColor=color.value;
    clearInput(FirstName,LastName,date,hour,color,image);
}

function addThing(FirstName,LastName,date,hour,color,image){
    let content="";
    content+= "<div>";
    content+= "<h3>First Name:</h3>";
    content+= "<p>"+FirstName.value+"</p>";
    content+= "<h3>Last Name:</h3>";
    content+= "<p>"+LastName.value+"</p>";
    content+="<h3>Chosen date:</h3>";
    content+= "<p>"+date.value+"</p>";
    content+="<h3> Chosen Hour:</h3>";
    content+="<p>"+hour.value+"</p>";
    content+="<h3>Image:</h3>";
    content+="<p><img src='"+image.value+"'</p>";
    content+="</div>";
    list.push(content);
}

function newDiv(){
    let content="";
    for (let i =0; i<list.length;i++){
        content+=list[i];
    }
    return content;
}

function clearInput(FirstName,LastName,date,hour,color,image){
    FirstName.value="";
    LastName.value="";
    date.value="";
    hour.value="";
    color.value="";
    image.value="";
}
