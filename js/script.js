// import { combination } from "./combination";


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
    } else {
        historyX.push(id);
        player = "O";
    }
    /* console.log('historyO--->', historyO);
    console.log('historyX--->', historyX); */ 
}


