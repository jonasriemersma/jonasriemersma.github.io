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


function Flip() {
    if (flipboxEl.classList.contains("flipped")) {
        flipboxEl.classList.toggle("flipped");


    }
    else {
        flipboxEl.classList.add("flipped");
        flipboxEl1.classList.remove("flipped");
        flipboxEl2.classList.remove("flipped");
        flipboxEl3.classList.remove("flipped");
        flipboxEl4.classList.remove("flipped");
        flipboxEl5.classList.remove("flipped");
        flipboxEl6.classList.remove("flipped");
        flipboxEl7.classList.remove("flipped");
        flipboxEl8.classList.remove("flipped");
    }
}

const flipboxEl1 = document.querySelectorAll('.flip-box')[1];


console.log(flipboxEl1);

function Flip1() {

    if (flipboxEl1.classList.contains("flipped")) {
        flipboxEl1.classList.toggle("flipped");

    }
    else {
        flipboxEl.classList.remove("flipped");
        flipboxEl1.classList.add("flipped");
        flipboxEl2.classList.remove("flipped");
        flipboxEl3.classList.remove("flipped");
        flipboxEl4.classList.remove("flipped");
        flipboxEl5.classList.remove("flipped");
        flipboxEl6.classList.remove("flipped");
        flipboxEl7.classList.remove("flipped");
        flipboxEl8.classList.remove("flipped");
    }
}

const flipboxEl2 = document.querySelectorAll('.flip-box')[2];


console.log(flipboxEl2);

function Flip2() {

    if (flipboxEl2.classList.contains("flipped")) {
        flipboxEl2.classList.toggle("flipped");

    }
    else {
        flipboxEl.classList.remove("flipped");
        flipboxEl1.classList.remove("flipped");
        flipboxEl2.classList.add("flipped");
        flipboxEl3.classList.remove("flipped");
        flipboxEl4.classList.remove("flipped");
        flipboxEl5.classList.remove("flipped");
        flipboxEl6.classList.remove("flipped");
        flipboxEl7.classList.remove("flipped");
        flipboxEl8.classList.remove("flipped");

    }
}

const flipboxEl3 = document.querySelectorAll('.flip-box')[3];


console.log(flipboxEl3);

function Flip3() {

    if (flipboxEl3.classList.contains("flipped")) {
        flipboxEl3.classList.toggle("flipped");

    }
    else {
        flipboxEl.classList.remove("flipped");
        flipboxEl1.classList.remove("flipped");
        flipboxEl2.classList.remove("flipped");
        flipboxEl3.classList.add("flipped");
        flipboxEl4.classList.remove("flipped");
        flipboxEl5.classList.remove("flipped");
        flipboxEl6.classList.remove("flipped");
        flipboxEl7.classList.remove("flipped");
        flipboxEl8.classList.remove("flipped");
    }
}

const flipboxEl4 = document.querySelectorAll('.flip-box')[4];

console.log(flipboxEl4);

function Flip4() {

    if (flipboxEl4.classList.contains("flipped")) {
        flipboxEl4.classList.toggle("flipped");

    }
    else {
        flipboxEl.classList.remove("flipped");
        flipboxEl1.classList.remove("flipped");
        flipboxEl2.classList.remove("flipped");
        flipboxEl3.classList.remove("flipped");
        flipboxEl4.classList.add("flipped");
        flipboxEl5.classList.remove("flipped");
        flipboxEl6.classList.remove("flipped");
        flipboxEl7.classList.remove("flipped");
        flipboxEl8.classList.remove("flipped");

    }
}

const flipboxEl5 = document.querySelectorAll('.flip-box')[5];

console.log(flipboxEl5);

function Flip5() {

    if (flipboxEl5.classList.contains("flipped")) {
        flipboxEl5.classList.toggle("flipped");

    }
    else {
        flipboxEl.classList.remove("flipped");
        flipboxEl1.classList.remove("flipped");
        flipboxEl2.classList.remove("flipped");
        flipboxEl3.classList.remove("flipped");
        flipboxEl4.classList.remove("flipped");
        flipboxEl5.classList.add("flipped");
        flipboxEl6.classList.remove("flipped");
        flipboxEl7.classList.remove("flipped");
        flipboxEl8.classList.remove("flipped");

    }
}

const flipboxEl6 = document.querySelectorAll('.flip-box')[6];

console.log(flipboxEl6);

function Flip6() {

    if (flipboxEl6.classList.contains("flipped")) {
        flipboxEl6.classList.toggle("flipped");

    }
    else {
        flipboxEl.classList.remove("flipped");
        flipboxEl1.classList.remove("flipped");
        flipboxEl2.classList.remove("flipped");
        flipboxEl3.classList.remove("flipped");
        flipboxEl4.classList.remove("flipped");
        flipboxEl5.classList.remove("flipped");
        flipboxEl6.classList.add("flipped");
        flipboxEl7.classList.remove("flipped");
        flipboxEl8.classList.remove("flipped");

    }
}


const flipboxEl7 = document.querySelectorAll('.flip-box')[7];

console.log(flipboxEl7);

function Flip7() {

    if (flipboxEl7.classList.contains("flipped")) {
        flipboxEl7.classList.toggle("flipped");

    }
    else {
        flipboxEl.classList.remove("flipped");
        flipboxEl1.classList.remove("flipped");
        flipboxEl2.classList.remove("flipped");
        flipboxEl3.classList.remove("flipped");
        flipboxEl4.classList.remove("flipped");
        flipboxEl5.classList.remove("flipped");
        flipboxEl6.classList.remove("flipped");
        flipboxEl7.classList.add("flipped");
        flipboxEl8.classList.remove("flipped");

    }
}


const flipboxEl8 = document.querySelectorAll('.flip-box')[8];

console.log(flipboxEl8);

function Flip8() {

    if (flipboxEl8.classList.contains("flipped")) {
        flipboxEl8.classList.toggle("flipped");

    }
    else {
        flipboxEl.classList.remove("flipped");
        flipboxEl1.classList.remove("flipped");
        flipboxEl2.classList.remove("flipped");
        flipboxEl3.classList.remove("flipped");
        flipboxEl4.classList.remove("flipped");
        flipboxEl5.classList.remove("flipped");
        flipboxEl6.classList.remove("flipped");
        flipboxEl7.classList.remove("flipped");
        flipboxEl8.classList.add("flipped");

    }
}

