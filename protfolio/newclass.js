


const textarea1 = document.getElementById('textarea1');
const ToatalCharacters1 = document.getElementById("Toatal-Characters");
const RemainingCharacter1 = document.getElementById("Remaining-Character")

textarea1.addEventListener("keydown",()=>{
    Counter()

});

function Counter(){
    ToatalCharacters1.innerText=textarea1.value.length
    RemainingCharacter1.innerText = textarea1.getAttribute("maxlength")-textarea1.value.length
}