import { useState } from 'react';
import styles from './index.module.css';

const Home = () => {
  const board = [...Array(9)].map(() => [...Array(9)].map(() => -1));
  const zeroBoard = [...Array(9)].map(() => [...Array(9)].map(() => 0));
  const [userInputs, setUserInputs] = useState(zeroBoard);
  const [bombMap, setBombMap] = useState(zeroBoard);
  const [firstClick, setFirstClick] = useState(true);
  const newBombMap = structuredClone(bombMap);
  const newUserInputs = structuredClone(userInputs);

  const clickL = (x: number, y: number) => {
    const bombCount = () => newBombMap.flat().filter((value) => value === 1).length;
    if (firstClick) {
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
    document.getElementsByTagName('html')[0].oncontextmenu = () => false;
    const userInput = userInputs[y][x];
    if (userInput === 1) return;
    else {
      const newUserInput =
        userInput === 0 ? 2 : userInput === 2 ? 3 : userInput === 3 ? 0 : userInput;
      newUserInputs[y][x] = newUserInput;
      console.log(newUserInput);
      setUserInputs(newUserInputs);
    }
  };

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
