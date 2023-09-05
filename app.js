const imgs = document.getElementById("imgs");

console.log(imgs);

const leftBtn = document.getElementById("left")
const rightBtn = document.getElementById("right")

const img = document.querySelectorAll("#imgs img")
console.log(img);


//  to control the counter on each image
let idx = 0;

// let interval = setInterval(run, 2000)
// run is the function that auto shifts the imgs

function run(){
    idx++;
    changeImage()
}

function changeImage(){
    if(idx > img.length - 1){ // when you will reach at the last image
        idx = 0
    }
    else if(idx < 0){
        idx = img.length - 1
    }

    imgs.style.transform = `translateX(${-idx * 500}px)`
    // imgs.style.transform = `translateX(-500px)`
}


// const myName = "S"

// console.log(`Her name is ${myName}`);


function resetInterval(){
    clearInterval(interval)
    // 2000 = 2 seconds
    interval = setInterval(run, 2000)
}


// functionalities for the buttons

rightBtn.addEventListener("click", () => {
    idx++
    changeImage()
    resetInterval()
})

leftBtn.addEventListener("click", () => {
    idx--
    changeImage()
    resetInterval()
})




