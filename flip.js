const flipboxEl = document.querySelectorAll('.flip-box')[0];
let dragStartTimestamp = 0;

console.log(flipboxEl);


/* flipboxEl.addEventListener("mousedown", (event) => {
      
    dragStartTimestamp = event.timeStamp;
    console.log(dragStartTimestamp)
});

flipboxEl.addEventListener("mouseup", (event) => {
  const dragDuration = event.timeStamp - dragStartTimestamp;
console.log(dragDuration)
  if (dragDuration <= 100) {
        // Navigate to the link
        Flip(); 
        console.log("whyyyyy")
    }
    else {
        dragStartTimestamp = 0
    }
}); */


function Flip(){
    if(flipboxEl.classList.contains("flipped")){
    flipboxEl.classList.toggle("flipped");

    }
    else{
    flipboxEl.classList.add("flipped");

}
}

const flipboxEl1 = document.querySelectorAll('.flip-box')[1];


console.log(flipboxEl1);

function Flip1(){
    
    if(flipboxEl1.classList.contains("flipped")){
    flipboxEl1.classList.toggle("flipped");

    }
    else{
    flipboxEl1.classList.add("flipped");

}
}

const flipboxEl2 = document.querySelectorAll('.flip-box')[2];


console.log(flipboxEl2);

function Flip2(){
    
    if(flipboxEl2.classList.contains("flipped")){
    flipboxEl2.classList.toggle("flipped");

    }
    else{
    flipboxEl2.classList.add("flipped");

}
}

const flipboxEl3 = document.querySelectorAll('.flip-box')[3];


console.log(flipboxEl3);

function Flip3(){
    
    if(flipboxEl3.classList.contains("flipped")){
    flipboxEl3.classList.toggle("flipped");

    }
    else{
    flipboxEl3.classList.add("flipped");

}
}
