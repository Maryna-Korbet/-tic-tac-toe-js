import { combination } from "./combination.js";


const content = document.querySelector('.content');

const historyO = [];
const historyX = [];

let markup = "";
let player = "O";

for (let i = 1; i <= 9; i += 1){
    markup += `<div class="item js-item" data-id = "${i}"></div>`;
}
// console.log(markup);

content.insertAdjacentHTML('afterbegin', markup);
content.addEventListener('click', handlerStep);

function handlerStep(e) {
    const { target } = e;
    let isWinner = false;

   /*  console.log(target);  */

    if (!target.classList.contains('js-item') || target.textContent){
        return;
    }

    target.textContent = player;

    const id = Number(target.dataset.id);
    /* console.log(id); */
    /* console.log(typeof id);  */
    
    if (player === "O") {
        historyO.push(id);
        player = "X";
        isWinner = historyO.length > 2 && checkWinner(historyO);
        /*   console.log('historyO--->', historyO);
        console.log('historyO--->', checkWinner(historyO)); */
    } else {
        historyX.push(id);
        player = "O";
        isWinner = historyX.length > 2 && checkWinner(historyX);
        /*  console.log('historyX--->', historyX);
        console.log('historyX--->', checkWinner(historyX)); */
    }
}

function checkWinner(arr) {
    return combination.some(item => item.every(id => arr.includes(id)))
}



