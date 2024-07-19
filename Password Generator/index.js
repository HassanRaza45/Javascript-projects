// let inputSlider = document.getElementById("inputSlider");
// let sliderValue = document.getElementById("sliderValue");
// let passBox = document.getElementById("passBox");
// let lowercase = document.getElementById("lowercase");
// let uppercase = document.getElementById("uppercase");
// let numbers = document.getElementById("numbers");
// let symbols = document.getElementById("symbols");
// let genBtn = document.getElementById("genBtn");
// let copyIcon = document.getElementById("copyIcon");


// // Showing input slider value 
// sliderValue.textContent = inputSlider.value;
// inputSlider.addEventListener('input', ()=>{
//     sliderValue.textContent = inputSlider.value;
// });

// genBtn.addEventListener('click', ()=>{
//     passBox.value = generatePassword();
// })

// let lowerChars = "abcdefghijklmnopqrstuvwxyz";
// let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let allNumbers = "0123456789";
// let allSymbols = "~!@#$%^&*"; 

// // Function to generate Password
// function generatePassword(){
//     let genPassword = "";
//     let allChars = "";

//     allChars  += lowercase.checked ? lowerChars : "";
//     allChars  += uppercase.checked ? upperChars : "";
//     allChars  += numbers.checked ? allNumbers : "";
//     allChars  += symbols.checked ? allSymbols : "";


//     if(allChars == "" || allChars.length == 0){
//         return genPassword;
//     }
    

//     let i = 1;
//     while(i<=inputSlider.value){
//         genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
//         i++;
//     }

//     return genPassword;
// }

// copyIcon.addEventListener('click', ()=>{
//     if(passBox.value != "" || passBox.value.length >=1){
//         navigator.clipboard.writeText(passBox.value);
//         copyIcon.innerText = "check";
//         copyIcon.title = "Password Copied";

//         setTimeout(()=>{
//             copyIcon.innerHTML = "content_copy";
//             copyIcon.title = "";
//         }, 3000)
// }
document.addEventListener("DOMContentLoaded", function() {
    const passBox = document.getElementById("passBox");
    const inputSlider = document.getElementById("inputSlider");
    const sliderValue = document.getElementById("sliderValue");
    const genBtn = document.getElementById("genBtn");

    const lowercase = document.getElementById("lowercase");
    const uppercase = document.getElementById("uppercase");
    const numbers = document.getElementById("numbers");
    const symbols = document.getElementById("symbols");

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "@#$%^&*()_+~|}{[]:;?><,./-=";

    function generatePassword(length) {
        let allChars = "";
        let password = "";

        if (lowercase.checked) allChars += lowercaseChars;
        if (uppercase.checked) allChars += uppercaseChars;
        if (numbers.checked) allChars += numberChars;
        if (symbols.checked) allChars += symbolChars;

        if (allChars === "") return "";

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * allChars.length);
            password += allChars[randomIndex];
        }

        return password;
    }

    inputSlider.addEventListener("input", function() {
        sliderValue.textContent = inputSlider.value;
    });

    genBtn.addEventListener("click", function() {
        const length = inputSlider.value;
        const password = generatePassword(length);
        passBox.value = password;
    });

    // Initialize slider value display
    sliderValue.textContent = inputSlider.value;
});
