const textInput = document.querySelector(".inputs input");
const checkBtn = document.querySelector(".inputs button");
const infoTxt= document.querySelector(".info-txt");
let filterInput;
checkBtn.addEventListener("click", () => {
    let reverseInput = filterInput.split("").reverse().join("");
    infoTxt.style.display = "block";
    if(filterInput != reverseInput) {
        return  infoTxt.innerHTML = `No, <span>'${textInput.value}'</span> is not a palindrome!`
    }
     infoTxt.innerHTML = `Yes, <span>'${textInput.value}'</span> is a palindrome!`
})
textInput.addEventListener("keyup", ()=> {
     filterInput = textInput.value.toLowerCase().replace(/[^A-Z0-9]/ig, " ")
    // console.log(filterInput)
    if(filterInput) {
        return checkBtn.classList.add("active");
    }
    checkBtn.classList.remove("active");
})
