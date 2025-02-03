let gameSeq=[];
let userSeq=[];
let h2=document.querySelector("h2");
let btns=["yellow","red","green","purple"];

let started=false;
let level=0;
document.addEventListener("keypress",function(){
   if(started==false){
    console.log ("strat");
    started=true;
    levelup();
   }
});

function gameflash(btn){
btn.classList.add("flash");
setTimeout(function(){
    btn.classList.remove("flash");},250);
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");},250);
    }

function levelup(){
    userSeq=[];
  level++;
  h2.innerText=`level ${level}`;
 let randIdx=Math.floor(Math.random()*4);
 let rendcolor=btns[randIdx];
 let rendbtn=document.querySelector(`.${rendcolor}`);
gameSeq.push(rendcolor);
console.log(gameSeq);
gameflash(rendbtn);
}

function checkAns(idx){
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
           setTimeout(levelup,1000);
        }
        console.log("same value");
    }else{
        h2.innerHTML=`Game Over!! Your score was <b>${level}</b> <br>Press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },250);
        reset();

    }
}

function btnPress(){
    let btn=this;
    userflash(btn);
    userColor=btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);
    let idx =level-1;
    checkAns(userSeq.length-1);
}
let allbtn=document.querySelectorAll(".btn");
for (btn of allbtn){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}