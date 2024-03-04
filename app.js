let gameSqu = [];
let userSqu = [];
// let maxScore = level;

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");

document.addEventListener("keypress", function(){
    if (started==false){
        console.log("game is started");
        started = true;

        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function levelUp(){
    userSqu = [];
    level++;
    h2.innerText = `Level ${level}`;
    // h2.innerText = `Level ${level}`;

    let randIndx = Math.floor(Math.random()*3);
    let randColor = btns[randIndx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSqu.push(randColor);
    console.log(gameSqu);
    gameFlash(randBtn);
}

function checkAns(idx){
    if(userSqu[idx]===gameSqu[idx]){
        if(userSqu.length==gameSqu.length){
            setTimeout(levelUp,1000);
        }
    }
    // else{
    //      h2.innerHTML = `Game over! Your score was <b>${level}</p> <br> Press any key to start.`;
    //     document.querySelector("body").style.backgroundColor = "red";
    //     setTimeout( function(){
    //         document.querySelector("body").style.backgroundColor = "white";
    //     }, 150);
    //     reset();
    // }
    else{
        if (level>maxScore[maxScore.length-1]){
            maxScore.push(level);
        }

        h2.innerHTML = `Game over! Your score was <b>${level}.</b>
        <br> High score is${maxScore[maxScore.length-1]}.
        <br>Press any key to restart.`

        document.querySelector("body").style.backgroundColor = "red";

        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);

    }
    

}


function btnPress(){
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSqu.push(userColor);

    maxScore=level;
    checkAns(userSqu.length-1, maxScore=level ) ;

}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started = false;
    gameSqu = [];
    userSqu = [];
    level = 0;
}


// function checkans (idx){
//     if (userSqu[idx]===gameSqu[idx]){
//         if(userSqu.length== gameSqu.length){
//             setTimeout(levelUp, 1000);
//         }
//     }else{
//         if (level>maxScore[maxScore.length-1]){
//             maxScore.push(level);
//         }

//         h3.innerHTML = `Game over! Your score was <b>${level}.</b>
//         <br> High score is${maxScore[maxScore.length-1]}.
//         <br>Press any key to restart.`

//         document.querySelector("body").style.backgroundColor = "red";

//         setTimeout(function(){
//             document.querySelector("body").style.backgroundColor = "white";
//         }, 150);
//     }

// }
// reset();

