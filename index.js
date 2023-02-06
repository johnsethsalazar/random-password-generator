const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let generateRandomBtn = document.getElementById('generatePass-btn')
let renderRandomPass1 = document.getElementById('randomPass1')
let renderRandomPass2 = document.getElementById('randomPass2')



generateRandomBtn.addEventListener("click", function(){
    let randomIndex1
    let randomIndex2 = Math.floor(Math.random()*characters.length) 
    let characterLimit = 0    
    
    renderRandomPass1.textContent = ''
    renderRandomPass2.textContent = ''
    
    for(let i=0; i<15; i++){
        if(characterLimit < 16){
             randomIndex1 = Math.floor(Math.random()*characters.length) 
             renderRandomPass1.textContent += characters[randomIndex1] 
             randomIndex2 = Math.floor(Math.random()*characters.length) 
             renderRandomPass2.textContent += characters[randomIndex2] 
             characterLimit++
        }        
    }     
})