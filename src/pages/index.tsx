import { useState } from 'react';
import styles from './index.module.css';

const Home = () => {
  const [firstClick, setFirstClick] = useState(true);

  const board = [...Array(9)].map(() => [...Array(9)].map(() => -1));
  const [userInputs, setUserInputs] = useState<(0 | 1 | 2 | 3)[][]>(
    [...Array(9)].map(() => [...Array(9)].map(() => 0))
  );
  const [bombMap, setBombMap] = useState<(0 | 1)[][]>(
    [...Array(9)].map(() => [...Array(9)].map(() => 0))
  );
  const newBombMap = structuredClone(bombMap);
  const newUserInputs = structuredClone(userInputs);

  const clickLeft = (x: number, y: number) => {
    const bombCount = () => newBombMap.flat().filter((x) => x === 1).length;
    if (firstClick) {
        while (bombCount() < 10) {
          const newx = Math.floor(Math.random() * 9);
          const newy = Math.floor(Math.random() * 9);
          if (!(newx === x && newy === y)) {
            newBombMap[newy][newx] = 1;
          }
        };
        setBombMap(newBombMap);
        setFirstClick(false);
      } else {
        newUserInputs[y][x] = 1;
        setUserInputs(newUserInputs);
      }
    };
  const clickRight = (x: number, y: number) => {
    document.getElementsByTagName("html")[0].oncontextmenu = () => false;
    const userInput = userInputs[y][x];
    if (userInput === 1) return;
    const newUserInput = (userInput === 0 ? 2 : userInput === 2 ? 3 : userInput === 3 ? 0 : userInput);
    newUserInputs[y][x] = newUserInput;
    setUserInputs(newUserInputs);
  };
  userInputs.forEach((row, j) =>
    row.forEach((userInput, i) => {
      if (userInput === 1) {
        //checkAround8(i, j);
      }
    })
  );
  return (
    <div className={styles.container}>
      <div className={styles.board}>
        {bombMap.map((row, y) =>
          row.map((number, x) => (
            <div
              className={number === -1 ? styles.stone : styles.number}
              style={{ backgroundPositionX: 30 - 30 * number }}
              key={`${y}-${x}`}
              onClick={() => clickLeft(x, y)}
              onContextMenu={() => clickRight(x, y)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
