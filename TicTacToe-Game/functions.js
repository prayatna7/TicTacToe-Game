// let boxes = document.querySelector('.boxes');
let boxes= document.querySelectorAll('.box');
let win = document.querySelector(".info");
let nextR = document.querySelector(".nextRound");
let resett = document.querySelector(".rst-btn");
let turnX= true;
let RoundStartX = true;
let Xwins=0;
let Owins=0;
const winPattern= [ [0,1,2],
[3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [6,4,2] ];

boxes.forEach((box) => {
   box.addEventListener("click", ()=>{
    if(turnX){
        console.log('Box Clicked!');
        box.innerHTML="X";  
        turnX= false;
    }
    else{
        console.log('Box Clicked!');
        box.innerHTML="O";
        turnX= true; 
    }
    box.disabled = true;
    matchWon();
   })
});
const matchWon= () =>{
    for(pattern of winPattern){
        console.log(boxes[pattern[0]].innerHTML,boxes[pattern[1]].innerHTML,boxes[pattern[2]].innerHTML);
        let val0= boxes[pattern[0]].innerHTML;
        let val1= boxes[pattern[1]].innerHTML;
        let val2= boxes[pattern[2]].innerHTML;
        if(val0!='' && val1!='' && val2!=''){
            if(val0===val1 && val1===val2){
                console.log('val0');
                boxes.forEach((box) => {
                    box.disabled=true;
                })
                printWinner(val0);
                return true;
            }
        }
    }
}
const printWinner= (a) =>{
    if(a==="X") Xwins++;
    else if(a==="O") Owins++;

    if(Xwins>=3){
        win.innerText= 'Congratulations!! Winner Of This Game Is  \'X\' 🥳';
        newGame();
    }
    else if(Owins>=3){
        win.innerText= 'Congratulations!! Winner Of This Game Is  \'O\' 🥳';
        newGame();
    }else 
        win.innerText= 'Yeahhh!! Winner Of This Round Is '+a+' 🥳';
        if(a==="X")
            RoundStartX=false;
        else if(a==="O")
            RoundStartX=true;
}
function reset(){
    boxes.forEach((box) => {
                    box.innerHTML='';
                })
    win.innerText='';
    boxes.forEach((box) => {
                    box.disabled=false;
                })
}
function next(){
    boxes.forEach((box) => {
                    box.innerHTML='';
                })
    win.innerText='';
    boxes.forEach((box) => {
                    box.disabled=false;
                })
    if(RoundStartX){
         win.innerHTML='X Starts!';
         turnX=true;
    }
    else {
         win.innerHTML='O Starts!';
         turnX=false;
    }
}
function newGame(){
    if(confirm('Game Over! Start New Game?')){
    boxes.forEach((box) => {
                    box.innerHTML='';
                })
    win.innerText='';
    boxes.forEach((box) => {
                    box.disabled=false;
                })
    Xwins=0;
    Owins=0;
}
}