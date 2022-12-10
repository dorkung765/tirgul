function send(){
    const fNameBox=document.getElementById("fullName");
    const addressBox=document.getElementById("addressBox");
    const nameErrorMessage=document.getElementById("fullNameError");
    const addressErrorMessage=document.getElementById("addressBoxError");
    const fName=fNameBox.value;
    const address=addressBox.value;
    if(fName===""){
        fNameBox.focus();
        nameErrorMessage.innerText="Missing full name";
        nameErrorMessage.style.color="red";
        fNameBox.style.backgroundColor="pink";
        fNameBox.style.color="white";
        window.event.preventDefault();
        return;
    }
    if(address===""){
        addressErrorMessage.innerText="Missing address";
        addressErrorMessage.style.color="red";
        addressBox.style.backgroundColor="pink";
        addressBox.style.color="white";
        window.event.preventDefault();
        return;
    }
    if(address.length<10){
        addressBox.value="";
        addressBox.focus();
        addressErrorMessage.innerText="Must be min 10 characters";
        addressErrorMessage.style.color="red";
        addressBox.style.backgroundColor="pink";
        addressBox.style.color="white";
        window.event.preventDefault();
        return;

    }

}