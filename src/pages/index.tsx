import styles from './index.module.css';

const Home = () => {
  const number = 3;
  return (
    <div className={styles.container}>
      <div 
        className={styles.number}
        style={{ backgroundPositionX: 30 - 30 * number }} 
      />

    </div>
  );
};

export default Home;
