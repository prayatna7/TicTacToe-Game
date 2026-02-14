// let boxes = document.querySelector('.boxes');
let boxes= document.querySelectorAll('.box');
let win = document.querySelector(".info");
let nextR = document.querySelector(".nextRound");
let resett = document.querySelector(".rst-btn");
let soundd = document.querySelector("#sound");
let s=true;
let turnX= true;
let RoundStartX = true;
let Xwins=0;
let Owins=0;
const winPattern= [ [0,1,2],
[3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [6,4,2] ];
let bgm= new Audio("Background.mp3");
let clickSound= new Audio("Click.mp3");
let gameWin= new Audio("Winning.mp3");
bgm.play();
function sound(){
    if(s){
    bgm.pause();
    soundd.innerText='🔈';
    s= false;
    }
    else{
        bgm.play();
    soundd.innerText='🔊';
    s= true;
    }
}
boxes.forEach((box) => {
   box.addEventListener("click", ()=>{
    clickSound.play();
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
                gameWin.play();
                document.getElementById("win").style.width="60px";
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
    gameWin.pause();
    gameWin.currentTime= 0;
    boxes.forEach((box) => {
                    box.innerHTML='';
                })
    win.innerText='';
    boxes.forEach((box) => {
                    box.disabled=false;
                })
    document.getElementById("win").style.width="0px";
}
function next(){
    gameWin.pause();
    gameWin.currentTime= 0;
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
    document.getElementById("win").style.width="0px";
}
function newGame(){
    gameWin.pause();
    gameWin.currentTime= 0;
    if(confirm('Game Over! Start New Game?')){
    boxes.forEach((box) => {
                    box.innerHTML='';
                })
    win.innerText='';
    boxes.forEach((box) => {
                    box.disabled=false;
                })
    document.getElementById("win").style.width="0px";
    Xwins=0;
    Owins=0;
}
}
function toggleSide(){
    const sidebar= document.getElementById('sidebar');
    if(sidebar.style.width==="250px"){
        sidebar.style.width="0px";
        sidebar.style.display="none";
    }
    else{
        sidebar.style.width="250px";
        sidebar.style.display="block";
    }
}