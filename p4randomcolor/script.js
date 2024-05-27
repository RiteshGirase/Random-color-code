// lets generate the random color for boxes

confirm("You want to see the random color boxes");

let boxes = document.querySelector(".container").children

function randomcolor(){

    let val1 = Math.ceil( 0 + Math.random() * 255 );
    let val2 = Math.ceil( 0 + Math.random() * 255 );
    let val3 = Math.ceil( 0 + Math.random() * 255 );
    return `rgb(${val1}, ${val2}, ${val3})`

}

let a = setInterval(() => {
    document.querySelector(".container").style.background = randomcolor();
}, 1000);

console.log(a);

// let b = setInterval(() => {
//     document.getElementsByClassName("box").style.backgroundcolor = randomcolor();
// }, 1000);

// console.log(b);

Array.from(boxes).forEach(e=>{
    setInterval(()=>{
        e.style.color = randomcolor()
    },1000)
    
})