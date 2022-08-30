function calculateTip() {
    
    let billAmt = document.getElementById("billamt").value;
    let serviceQlt = document.getElementById("serviceQual").value;
    let NoPeople = document.getElementById("peopleamt").value;

    if(billAmt === "" || serviceQlt == 0){
        alert("Please Enter Bill Amount");
        return;
    }

    if(NoPeople === "" || NoPeople <= 1) {
        NoPeople = 1;
        document.getElementById("each").style.display = "none";
    } else{
        document.getElementById("each").style.display = "block";
    }
    

    let total = (billAmt * serviceQlt) / NoPeople;

    total = Math.round(total * 100) / 100;

    total = total.toFixed(2);

     document.getElementById("totalTip").style.display = "block";

    document.getElementById("tip").innerHTML = total;
    
    
}

//for hiding total tip and each
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

//this is for not navigate next page after submit.
let form = document.getElementById("formTag");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);





