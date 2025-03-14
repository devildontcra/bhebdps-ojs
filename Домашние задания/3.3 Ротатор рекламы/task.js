let p = document.querySelector(".rotator")
let i = 0


setInterval(() =>{
    p.children[i].classList.toggle("rotator__case_active")
    i = (i+1)% p.children.length

    p.children[i].classList.toggle("rotator__case_active")
    
}, 1000)