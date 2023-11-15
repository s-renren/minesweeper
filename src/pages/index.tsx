import styles from './index.module.css';

const Home = () => {
  const board = [...Array(9)].map((_, y) => [...Array(9)].map((_, x) => ((y + x + 1) %  13) - 1));
  return (
    <div className={styles.container}>
      <div className={styles.board}>
        {board.map((row, y) =>
          row.map((number, x) => (
            <div
              className={number === -1 ? styles.stone : styles.number}
              style={{ backgroundPositionX: 30 - 30 * number }}
              key={`${y}-${x}`}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
