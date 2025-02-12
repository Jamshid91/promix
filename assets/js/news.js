
let box=document.getElementsByClassName('block7-item');
let btn=document.querySelector('.view-all');

window.onload = function () {
    for (let i=6;i<box.length;i++) {
        box[i].style.display = "none";
    }

    let countD = 6;
    btn.addEventListener("click", function() {
        let box=document.getElementsByClassName('block7-item');
        countD += 6;
        if (countD <= box.length){
            for(let i=0;i<countD;i++){
                box[i].style.display = "block";
            }
        }

    })
}
  


const mediaQuery = window.matchMedia('(max-width: 767px)')

if (mediaQuery.matches) {
    window.onload = function () {
        for (let i=3;i<box.length;i++) {
            box[i].style.display = "none";
        }
    
        let countD = 3;
        btn.addEventListener("click", function() {
            let box=document.getElementsByClassName('block7-item');
            countD += 3;
            if (countD <= box.length){
                for(let i=0;i<countD;i++){
                    box[i].style.display = "block";
                }
            }
    
        })
    }
}