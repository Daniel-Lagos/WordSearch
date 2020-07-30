import styles from './index.module.css'
import WordSearch from "../components/word-search-table/word-search";
import Chronometer from "../components/chronometer/chronometer";
import FindWords from "../components/find-words/find-words";
import GameButton from "../components/buttons/game-button";
import Head from "next/head";
import MainTitle from "../components/main/main-tittle";
import Score from "../components/score/score";

const Index = () => {
    return (<>
        <Head>
            <title>Word Search</title>
            <link href="https://fonts.googleapis.com/css2?family=Orbitron&display=swap" rel="stylesheet"/>
        </Head>
        <MainTitle/>
        <div className={styles.maincontent}>
            <div className={styles.gameinformation}>
                <GameButton text={'New Game'}/>
                <Chronometer/>
                <Score/>
            </div>
            <div className={styles.gamewords}>
                <p>Words</p>
            </div>
            <div className={styles.gamewordsearch}>
                <WordSearch/>
            </div>
            <div className={styles.gamewordslist}>
                <FindWords/>
            </div>
        </div>
    </>
);
};

export default Index;