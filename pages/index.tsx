import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Head from 'next/head';

import { toggleName } from '../redux/actions/tweetsActions';
import Tweet from '../components/Tweet';
import styles from '../styles/Tweets.module.css';

const Index = () => {
  const dispatch = useDispatch();
  const politicianName = useSelector((state: any) => state.politician.name);

  return (
    <div className={styles.container}>
      <Head>
        <title>Twitter Stream</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Real-time <span>Twitter Stream!</span>
        </h1>

        <p className={styles.description}>
          Latest tweets about{' '}
          <span
            className={`${styles.code} ${
              politicianName === 'Donald Trump' ? styles.active : null
            }`}
          >
            Donald Trump
          </span>
          /{' '}
          <span
            className={`${styles.code} ${
              politicianName === 'Hilary Clinton' ? styles.active : null
            }`}
          >
            Hilary Clinton
          </span>
        </p>

        <button
          className={styles.button}
          onClick={() => dispatch(toggleName())}
        >
          Switch
        </button>

        <div className={styles.grid}>
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
        </div>
      </main>

      <footer className={styles.footer}>
        <p>Made with ❤️ by Mariana Gamiño</p>
      </footer>
    </div>
  );
};

export default Index;
