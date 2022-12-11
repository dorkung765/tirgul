let myCode="";
function numberClick(codeNumber){
    myCode+=codeNumber;
}
function checkNumber(){
    if (myCode==="2807"){
        alert ("Door open");
    }
    else{
        alert ("Go home");
    }
    myCode=""; 
}
function clearCode(){
    myCode=myCode.substring(0,myCode.length-1);
}