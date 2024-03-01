import { useState } from 'react';
import styles from './index.module.css';

const Home = () => {
  const board = [...Array(9)].map(() => [...Array(9)].map(() => -1));
  const zeroBoard = [...Array(9)].map(() => [...Array(9)].map(() => 0));
  const [userInputs, setUserInputs] = useState(zeroBoard);
  const [bombMap, setBombMap] = useState(zeroBoard);
  const newBombMap = structuredClone(bombMap);
  const newUserInputs = structuredClone(userInputs);
  const isFirst = () => !bombMap.flat().includes(1);
  const isFailed = () =>
    bombMap.flat().filter((bomb, index) => bomb === 1 && userInputs.flat()[index] === 1).length > 0;

  const checkAround8 = (x: number, y: number) => {
    board[y][x] = [-1, 0, 1]
      .map((dx) =>
        [-1, 0, 1].map((dy) => bombMap[y + dy] !== undefined && bombMap[y + dy][x + dx] === 1)
      )
      .flat()
      .filter(Boolean).length;

    if (board[y][x] === 0) {
      [-1, 0, 1].forEach((dx) =>
        [-1, 0, 1].forEach((dy) => {
          if (board[y + dy]?.[x + dx] === -1) {
            checkAround8(x + dx, y + dy);
          }
        })
      );
    }
  };

  const clickL = (x: number, y: number) => {
    if (isFailed()) {
      return;
    }
    if (isFirst()) {
      const bombCount = () => newBombMap.flat().filter((value) => value === 1).length;
      const setUpBombMap = () => {
        while (bombCount() < 10) {
          const randomX = Math.floor(Math.random() * 9);
          const randomY = Math.floor(Math.random() * 9);
          if (!(randomX === x && randomY === y)) {
            newBombMap[randomY][randomX] = 1;
          }
        }
      };
      setUpBombMap();
      setBombMap(newBombMap);
    }
    if (userInputs[y][x] === 0) {
      newUserInputs[y][x] = 1;
      setUserInputs(newUserInputs);
    }
  };

  const clickR = (x: number, y: number) => {
    if (isFailed()) return;
    document.getElementsByTagName('html')[0].oncontextmenu = () => false;
    const userInput = userInputs[y][x];
    if (userInput === 1) return;
    else {
      const newUserInput =
        userInput === 0 ? 2 : userInput === 2 ? 3 : userInput === 3 ? 0 : userInput;
      newUserInputs[y][x] = newUserInput;
      setUserInputs(newUserInputs);
    }
  };

  userInputs.forEach((row, j) =>
    row.forEach((userInput, i) => {
      if (userInput === 1) {
        checkAround8(i, j);
      } else if (userInput === 2) {
        board[j][i] = 9;
      } else if (userInput === 3) {
        board[j][i] = 10;
      } else {
        board[j][i] = -1;
      }
    })
  );

  if (isFailed()) {
    bombMap.forEach((row, j) =>
      row.forEach((userInput, i) => {
        if (userInput === 1) {
          board[j][i] = 11;
        }
      })
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.board}>
        {board.map((row, y) =>
          row.map((number, x) => (
            <div
              className={number === -1 ? styles.stone : styles.number}
              style={{ backgroundPositionX: 30 - 30 * number }}
              key={`${y}-${x}`}
              onClick={() => clickL(x, y)}
              onContextMenu={() => clickR(x, y)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
