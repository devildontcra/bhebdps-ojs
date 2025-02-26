let i = 1
let dead = document.getElementById("dead")
let lost = document.getElementById("lost")



while (i <= 9){
    document.getElementById(`hole${i}`).addEventListener("click" , (event)=> {
        let element = event.target
        if (element.classList != 'hole') {
            alert("удар!")
            dead.textContent = Number(dead.textContent) + 1
            if(Number(dead.textContent) >= 10){
                alert("победа!")
                dead.textContent = 0
                lost.textContent = 0
            }
        }else{
            alert("мимо")
            lost.textContent = Number(lost.textContent) + 1
            if(Number(lost.textContent) >= 3){
                alert("проигрыш!")
                dead.textContent = 0
                lost.textContent = 0
            }
        }
        
    })
    
    i+=1
}
