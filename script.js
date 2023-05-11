let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let imgCon = document.querySelector('.imgCon');
let img = document.querySelectorAll('img');

let imgCount = 0;
next.addEventListener('click', ()=>{
    imgCount++;
    upDateImgNext();
})

function upDateImgNext(){
    if(imgCount > img.length-1)
        imgCount = 0;
    imgCon.style.transform = `translateX(-${imgCount*500}px)`;
}

prev.addEventListener('click', ()=>{
    imgCount--;
    upDateImgPrev();
})

function upDateImgPrev(){
    if(imgCount < 0)
        imgCount = 3;
    imgCon.style.transform = `translateX(-${imgCount*500}px)`;
}

setInterval(() => {
    imgCount++;
    upDateImgNext()
}, 3000);