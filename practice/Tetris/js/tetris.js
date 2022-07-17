//DOM 선언
const playground = document.querySelector(".playground > ul");

//Setting
const GAME_ROWS = 20;
const GAME_COLS = 10;

//variables
let score = 0;
let duration = 500;
let downInterval;
let tempMovingItem;

const BLOCKS = {
   tree: [ //뻡규모양
      [[2, 1], [0, 1], [1, 0], [1, 1]], //회전했을 때 각각의 모양(좌표값)을 배열로 선언
      [[], [], [], []],
      [[], [], [], []],
      [[], [], [], []],
   ]
}

const movingItem = {
   type: "tree",
   direction: 0,
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
   renderBlocks();
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

function renderBlocks() {
   const { type, direction, top, left } = tempMovingItem;
   const moveBlocks = document.querySelectorAll(".moving");//moving클래스 부여
   moveBlocks.forEach(moving => {
      moving.classList.remove(type, "moving");//이동하고 나서 전 위치의 블록 지우기
   });
   BLOCKS[type][direction].forEach(block => {
      const x = block[0] + left;
      const y = block[1] + top;
      const target = playground.childNodes[y] ? playground.childNodes[y].childNodes[0].childNodes[x] : null;
      const isAvailable = checkEmpty(target);
      if (isAvailable) {
         target.classList.add(type, "moving")
      }
      else {
         tempMovingItem = { ...movingItem }
         setTimeout(() => {//콜 스택 오버플로우를 방지(이벤트를 계속 호출해서 오류발생함)
            renderBlocks();//재귀함수 사용
            if(moveType ==="top"){
               seizeBlock();
            }
         }, 0)
      }
   });
   movingItem.left = left;
   movingItem.top = top;
   movingItem.direction = direction;
}

function seizeBlock(){
   
}

function checkEmpty(target) {
   if (!target) {
      return false;
   }
   return true;
}


function moveBlock(moveType, amount) {
   tempMovingItem[moveType] += amount
   renderBlocks();
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
      case 40:
         moveBlock("top", 1);
         break;
      default:
         break;
   }
})