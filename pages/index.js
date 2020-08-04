import styles from './index.module.css'
import WordSearch from "../components/word-search-table/word-search";
import Chronometer from "../components/chronometer/chronometer";
import FindWords from "../components/find-words/find-words";
import GameButton from "../components/buttons/game-button";
import Head from "next/head";
import MainTitle from "../components/main/main-tittle";
import Score from "../components/score/score";
import wordsearch from "../utils/word-search-logic";

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

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

export const getServerSideProps = async (context) => {
    const wordsJSON = await import('../utils/words.json');
    const words = wordsJSON.default || [];
    const randomWords = shuffle(words);
    const selectedWords = randomWords.slice(0, 8);
    const wordsSortedByLength = selectedWords.sort((a, b) => {
        return a.word.length > b.word.length ? -1 : 1;
    });
    const size = Math.ceil(wordsSortedByLength[0].word.length * 1.25);
    const wordsStrings = wordsSortedByLength.map((it) => {
        return it.word
    })
    const search = await wordsearch(wordsStrings, size, size);
    if (!search) return {props: {}};
    return {
        props: {
            puzzle: search.grid,
            solved: search.solved,
            placed: search.placed,
            originalWords: wordsSortedByLength
        }
    };
};