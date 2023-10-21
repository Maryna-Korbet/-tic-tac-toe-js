// import { combination } from "./combination";


const content = document.querySelector('.content');

let markup = '';
for (let i = 0; i < 9; i += 1){
    markup += `<div class="item"></div>`;
}
// console.log(markup);

content.insertAdjacentHTML("afterbegin", markup);
