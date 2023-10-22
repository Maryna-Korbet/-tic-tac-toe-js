import { combination } from "./combination.js";


const content = document.querySelector('.content');
const resetBtn = document.querySelector('.js-reset');

content.addEventListener('click', handlerStep);
resetBtn.addEventListener('click', resetGame);

const historyO = [];
const historyX = [];

let player = "O";

createMarkup();

function handlerStep(e) {
    const { target } = e;
    let isWinner = false;

    if (!target.classList.contains('js-item') || target.textContent){
        return;
    }

    target.textContent = player;

    const id = Number(target.dataset.id);
    
    if (player === "O") {
        historyO.push(id);
        isWinner = historyO.length > 2 && checkWinner(historyO);

    } else {
        historyX.push(id);
        isWinner = historyX.length > 2 && checkWinner(historyX);
    }

    if (isWinner) {
        showModalWinner(player);
        return;
    }

    player = player === "O" ? "X" : "O";

    if (historyO.length + historyX.length === 9 && !isWinner) {
        showModalDraw();
        return;
    }
}

function checkWinner(arr) {
    return combination.some(item => item.every(id => arr.includes(id)))
}

function handlePressEscape(e, modal) {
    if (e.code === 'Escape') {
        modal.close();
    }
}

function showModalWinner(player) {
    const modal = basicLightbox.create(`
        <div class="winner">
            <p class="winner-title">👑Player - ${player} is winner👑</p>
        </div>`,

        {
            onShow: () => {
                window.addEventListener('keydown', e => handlePressEscape(e, modal));
            },
            onClose: () => {
                window.removeEventListener('keydown', e => handlePressEscape(e, modal));
            },
        }
    );

    modal.show();
}

function showModalDraw() {
    const modal = basicLightbox.create(`
        <div class="draw">
            <p class="draw-title">There is no winner. Try again</p>
        </div>`,

        {
            onShow: () => {
                window.addEventListener('keydown', e => handlePressEscape(e, modal));
            },
            onClose: () => {
                window.removeEventListener('keydown', e => handlePressEscape(e, modal));
            },
        }
    );

    modal.show();
}

function createMarkup() {
    let markup = "";
    for (let i = 1; i <= 9; i += 1){
    markup += `<div class="item js-item" data-id = "${i}"></div>`;
    }
    content.innerHTML = markup;
}

function resetGame() {
    player = "O";
    createMarkup();
    historyO.splice(0);
    historyX.splice(0);
}



