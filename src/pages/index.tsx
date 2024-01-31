import { useState } from 'react';
import styles from './index.module.css';

const Home = () => {
  const [firstClick, setFirstClick] = useState(true);

  const board = [...Array(9)].map((_, y) => [...Array(9)].map((_, x) => ((y + x + 1) % 13) - 1));
  const [userInputs, setUserInputs] = useState<(0 | 1 | 2 | 3)[][]>(
    [...Array(9)].map(() => [...Array(9)].map(() => 0))
  );
  const [bombMap, setBombMap] = useState<(0 | 1)[][]>(
    [...Array(9)].map(() => [...Array(9)].map(() => 0))
  );

  const clickLeft = (x: number, y: number) => {
    const newBombMap = structuredClone(bombMap);
    const bombCount = () => newBombMap.flat().filter((x) => x === 1).length;
    if (firstClick) {
        while (bombCount() < 10) {
          const newx = Math.floor(Math.random() * 9);
          const newy = Math.floor(Math.random() * 9);
          if (!(newx === x && newy === y)) {
            newBombMap[newy][newx] = 1;
          }
        }
        setBombMap(newBombMap);
        setFirstClick(false);
      } else {
        const newUserInputs = [...userInputs];
        newUserInputs[y][x] = 1;
        setUserInputs(newUserInputs);
      }
    }
  const clickRight = (x: number, y: number) => {
    const newBoard = structuredClone(board);
  };
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
