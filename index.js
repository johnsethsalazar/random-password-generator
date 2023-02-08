const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let generateRandomBtn = document.getElementById('generatePass-btn')
let renderRandomPass1 = document.getElementById('randomPass1')
let renderRandomPass2 = document.getElementById('randomPass2')
let passwordLengthInput = document.getElementById('passwordCharLengthInput')
let warning = document.getElementById('passwordLengthWarning')

generateRandomBtn.addEventListener("click", function(){
    let randomIndex1
    let randomIndex2 
    let characterLimit = 0
    let passwordLength = passwordLengthInput.value
    
    renderRandomPass1.textContent = ''
    renderRandomPass2.textContent = ''
    
    for(let i=0; i<passwordLength; i++){
        if(passwordLength < 8){
            warning.textContent = "Please input a minimum of 8 characters."
            document.getElementById('passwordCharLengthInput').style.borderColor = 'red'
        }
        else if(passwordLength > 30){
            warning.textContent = "Please input a maximum of 30 characters."
            document.getElementById('passwordCharLengthInput').style.borderColor = 'red'
        }
        else if(characterLimit < passwordLength && passwordLength > 7){
             randomIndex1 = Math.floor(Math.random()*characters.length) 
             renderRandomPass1.textContent += characters[randomIndex1] 
             randomIndex2 = Math.floor(Math.random()*characters.length) 
             renderRandomPass2.textContent += characters[randomIndex2] 
             characterLimit++
             warning.textContent = ""
             document.getElementById('passwordCharLengthInput').style.borderColor = '#10B981'
        }       
        else{
            location.reload()
        }
    }     
})

function copyPass1(){
    let copyText = document.getElementById('randomPass1')
    let textToCopy = copyText.textContent

    if(textToCopy === ''){
        console.log('Warning: No text')
    }
    else{
        copy(textToCopy)
        alert("Copied the text: " + textToCopy)
    }
}

function copyPass2(){
    let copyText = document.getElementById('randomPass2')
    let textToCopy = copyText.textContent

    if(textToCopy === ''){
        console.log('Warning: No text')
    }
    else{
        copy(textToCopy)
        alert("Copied the text: " + textToCopy)
    }
}

function copy(text){
    navigator.clipboard.writeText(text)
}