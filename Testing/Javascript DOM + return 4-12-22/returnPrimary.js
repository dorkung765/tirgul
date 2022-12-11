function printPrimary(){
    const number = document.getElementById("num");
    document.write(checkPrimary(number.value))

    }

function checkPrimary(n){
    if(n<0){
        n=-n;
    }
    else if (n==0){
        document.write("The number 0 is not natural number"+"<br>");
        return false;
    }
    else if (n==1){
        document.write("The num 1 is nut in the defenition of primary"+"<br>");
        return false;
    }
    for (let i=2;i<n;i++){
        if (n%i==0){
            return false;
        }
        
    }
    return true;

}