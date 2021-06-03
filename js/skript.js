const moneza = document.querySelector('.monezaSection');
let ofset = 0;

document.querySelector('.next').addEventListener("click", ()=>{
    ofset += 295;
    if(ofset > 295){
        ofset = 0;
    };
    moneza.style.left = -ofset + 'px';

})




document.querySelector('.back').addEventListener("click", ()=>{
    ofset -= 295;
    if(ofset < -295){
        ofset = 0;
    };
    moneza.style.left = ofset + 'px';

})