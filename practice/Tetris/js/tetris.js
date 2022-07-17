import BLOCKS from "./blocks.js";

//DOM 선언
const playground = document.querySelector(".playground > ul");
const gameText = document.querySelector(".game-text");
const scoreDisplay = document.querySelector(".score");
const restartButton = document.querySelector(".game-text > button");

//Setting
const GAME_ROWS = 20;
const GAME_COLS = 10;

//variables
let score = 0;
let duration = 1000;
let downInterval;
let tempMovingItem;

const movingItem = {
   type: "",
   direction: 1,
   top: 0,
   left: 3,
};

init();

//functions
function init() {
   tempMovingItem = { ...movingItem }; //스프레드 오퍼레이터 : 객체의 값만 불러옴
   for (let i = 0; i < GAME_ROWS; i++) {
      prependNewLine();
   }
   generateNewBlock();
}

function prependNewLine() {
   const li = document.createElement("li");
   const ul = document.createElement("ul");
   for (let j = 0; j < GAME_COLS; j++) {
      const matrix = document.createElement("li");
      ul.prepend(matrix);
   }
   li.prepend(ul)
   playground.prepend(li)
}

function renderBlocks(moveType = "") {
   const { type, direction, top, left } = tempMovingItem;
   const moveBlocks = document.querySelectorAll(".moving");//moving클래스 부여
   moveBlocks.forEach(moving => {
      moving.classList.remove(type, "moving");//이동하고 나서 전 위치의 블록 지우기
   });
   BLOCKS[type][direction].some(block => {
      const x = block[0] + left;
      const y = block[1] + top;
      const target = playground.childNodes[y] ? playground.childNodes[y].childNodes[0].childNodes[x] : null;
      const isAvailable = checkEmpty(target);
      if (isAvailable) {
         target.classList.add(type, "moving")
      }
      else {
         tempMovingItem = { ...movingItem }
         if (moveType === 'retry') {
            clearInterval(downInterval);
            showGameoverText();
         }
         setTimeout(() => {//콜 스택 오버플로우를 방지(이벤트를 계속 호출해서 오류발생함)
            renderBlocks('retry');//재귀함수 사용
            if (moveType === "top") {
               seizeBlock();
            }
         }, 0)
         return true;
      }
   });
   movingItem.left = left;
   movingItem.top = top;
   movingItem.direction = direction;
}

function seizeBlock() {//블록 고정하는 함수
   const moveBlocks = document.querySelectorAll(".moving");//moving클래스 부여
   moveBlocks.forEach(moving => {
      moving.classList.remove("moving");//이동하고 나서 전 위치의 블록 지우기
      moving.classList.add("seized");
   });
   checkMatch()
}

function checkMatch() {
   const childNodes = playground.childNodes;
   childNodes.forEach(child => {//각각의 li를 체크
      let matched = true;
      child.children[0].childNodes.forEach(li => {
         if (!li.classList.contains("seized")) {
            matched = false;
         }
      })
      if (matched) {
         child.remove();
         prependNewLine()
         score++;
         duration -= 12.5;
         scoreDisplay.innerHTML = score;
      }
   })
   generateNewBlock();
}

function generateNewBlock() {
   clearInterval(downInterval);
   downInterval = setInterval(() => {
      moveBlock('top', 1)
   }, duration)
   const blockArray = Object.entries(BLOCKS);
   const randomIndex = Math.floor(Math.random() * blockArray.length);
   movingItem.type = blockArray[randomIndex][0];
   movingItem.top = 0;
   movingItem.left = 3;
   movingItem.direction = 0;
   tempMovingItem = { ...movingItem };
   renderBlocks();
}

function checkEmpty(target) {
   if (!target || target.classList.contains("seized")) {
      return false;
   }
   return true;
}


function moveBlock(moveType, amount) {
   tempMovingItem[moveType] += amount
   renderBlocks(moveType);
}

function changeDirection() {
   const direction = tempMovingItem.direction;
   direction === 3 ? tempMovingItem.direction = 0 : tempMovingItem.direction += 1;
   renderBlocks();
}

function dropBlock() {
   clearInterval(downInterval);
   downInterval = setInterval(() => {
      moveBlock("top", 1);
   }, 10)
}

function showGameoverText() {
   gameText.style.display = "flex";
}

//event handling
document.addEventListener("keydown", e => {
   switch (e.keyCode) {
      case 39:
         moveBlock("left", 1);
         break;
      case 37:
         moveBlock("left", -1);
         break;
      case 38:
         changeDirection();
         break;
      case 40:
         moveBlock("top", 1);
         break;
      case 32:
         dropBlock();
         break;
      default:
         break;
   }
})

restartButton.addEventListener("click", () => {
   playground.innerHTML = "";
   gameText.style.display = "none";
   init();
})