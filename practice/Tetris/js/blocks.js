const BLOCKS = {
   T: [ //뻡규모양
      [[2, 1], [0, 1], [1, 0], [1, 1]], //회전했을 때 각각의 모양(좌표값)을 배열로 선언
      [[2, 1], [1, 2], [1, 0], [1, 1]],
      [[1, 2], [0, 1], [2, 1], [1, 1]],
      [[1, 2], [0, 1], [1, 0], [1, 1]],
   ],
   O: [//정사각형
      [[0, 0], [0, 1], [1, 0], [1, 1]],
      [[0, 0], [0, 1], [1, 0], [1, 1]],
      [[0, 0], [0, 1], [1, 0], [1, 1]],
      [[0, 0], [0, 1], [1, 0], [1, 1]],
   ],
   I: [//긴거
      [[0, 0], [1, 0], [2, 0], [3, 0]],
      [[1, -1], [1, 0], [1, 1], [1, 2]],
      [[0, 0], [1, 0], [2, 0], [3, 0]],
      [[1, -1], [1, 0], [1, 1], [1, 2]],
   ],
   Z: [//z모양
      [[0, 0], [1, 0], [1, 1], [2, 1]],
      [[2, 1], [1, 2], [2, 0], [1, 1]],
      [[0, 1], [1, 1], [1, 2], [2, 2]],
      [[1, 1], [0, 2], [1, 0], [0, 1]],
   ],
   S: [//s모양
      [[1, 0], [2, 0], [0, 1], [1, 1]],
      [[1, 0], [1, 1], [2, 1], [2, 2]],
      [[1, 1], [2, 1], [0, 2], [1, 2]],
      [[0, 0], [0, 1], [1, 1], [1, 2]],
   ],
   L: [//L모양
      [[2, 0], [0, 1], [1, 1], [2, 1]],
      [[0, 0], [0, 1], [0, 2], [1, 2]],
      [[0, 0], [1, 0], [2, 0], [0, 1]],
      [[0, 0], [1, 0], [1, 1], [1, 2]],
   ],
   J: [//J모양
      [[0, 0], [0, 1], [1, 1], [2, 1]],
      [[0, 0], [1, 0], [0, 1], [0, 2]],
      [[0, 0], [1, 0], [2, 0], [2, 1]],
      [[1, 0], [1, 1], [1, 2], [0, 2]],
   ],
}

export default BLOCKS;