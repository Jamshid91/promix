
let box=document.getElementsByClassName('product');
let btn=document.querySelector('.show-more');

window.onload = function () {
    for (let i=9;i<box.length;i++) {
        box[i].style.display = "none";
    }

    let countD = 9;
    btn.addEventListener("click", function() {
        let box=document.getElementsByClassName('product');
        countD += 9;
        if (countD <= box.length){
            for(let i=0;i<countD;i++){
                box[i].style.display = "block";
            }
        }

    })
}
  


const mediaQuery = window.matchMedia('(max-width: 1250px)')

if (mediaQuery.matches) {
    window.onload = function () {
        for (let i=4;i<box.length;i++) {
            box[i].style.display = "none";
        }
    
        let countD = 4;
        btn.addEventListener("click", function() {
            let box=document.getElementsByClassName('product');
            countD += 4;
            if (countD <= box.length){
                for(let i=0;i<countD;i++){
                    box[i].style.display = "block";
                }
            }
    
        })
    }
}