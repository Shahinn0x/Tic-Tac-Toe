let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");

var count =0;
 


let turn0 = true;

const winPattern =[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [6, 7, 8],
    [3, 4, 5]
]

const resetGame = () => {
    turn0 = true;
    enabledBoxes();
    msgContainer.classList.add("hide");

};

boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        if(turn0){
            box.innerText = "O";
            turn0 = false;
        }else{
            box.innerText = "X";
            turn0 =true;
        }
        box.disabled = true;

        checkWinner();

    });

});

const disabledBoxes = () => {
    for(let box of boxes){
        box.disabled =true;
    }

}

const enabledBoxes = () => {
    for(let box of boxes){
        box.disabled =false;
        box.innerText = "";
    }

}



const showWinner = (winner) => {
    msg.innerText = `Congratulation, Winner is ${winner}`;
    msgContainer.classList.remove("hide"); 
    disabledBoxes();
    boxe.style.backgroundColor ="white";

}



const checkTie = () => {
    
    return Array.from(boxes).every(box=> box.innerText  !=="")
}




const checkWinner = () => {
    for (let pattern of winPattern){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
            }else if(pos1Val != pos2Val != pos3Val){
                const isBoardFull = [...boxes].every(box => box.innerText !== "");
                
            }
          
        }

        checkTie();
        
    }
    
};


newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click" , resetGame);


