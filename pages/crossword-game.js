import styles from "../components/crossword-game.module.css"
import MainTitle from "../components/main/main-tittle";
import WordSearch from "../components/word-search-table/word-search";
import wordsearch from "../utils/word-search-logic";
import GameButton from "../components/buttons/game-button";
import Link from "next/link";
import CrossWord from "../components/crossword-table/crossword-table";
import Head from "next/head";

const CrossWordGame = (props) => {
    return (<>
        <Head>
            <title>CrossWord</title>
            <link href="https://fonts.googleapis.com/css2?family=Orbitron&display=swap" rel="stylesheet"/>
        </Head>
        <MainTitle title={'Crossword'}/>
        <div className={styles.mainContent}>
            <div className={styles.optionsContent}>
                <GameButton text={'New Game'}/>
                <Link href={'/index'}>
                    <a className={styles.goBack}>Volver</a>
                </Link>
            </div>
            <div className={styles.wordsContent}>
                <div>
                    <h4 className={styles.h4}>Verticales</h4>
                    <ul>
                        <li>1.</li>
                        <li>2.</li>
                        <li>3.</li>
                        <li>4.</li>
                    </ul>
                </div>
                <div>
                    <h4 className={styles.h4}>Horizontales</h4>
                    <ul>
                        <li>1.</li>
                        <li>2.</li>
                        <li>3.</li>
                        <li>4.</li>
                    </ul>
                </div>
            </div>
            <div className={styles.mainContent}>
                <CrossWord wordsString={props.puzzle}/>
            </div>
        </div>
    </>)
}
export default CrossWordGame;


function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

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
    const selectedWords = randomWords.slice(0, 6);
    const wordsSortedByLength = selectedWords.sort((a, b) => {
        return a.word.length > b.word.length ? -1 : 1;
    });
    const size = Math.ceil(wordsSortedByLength[0].word.length);
    const wordsStrings = wordsSortedByLength.map((it) => {
        return it.word.toLowerCase()
    })
    const search = await wordsearch(wordsStrings, size, size, {crossword: true});
    if (!search) return {props: {}};
    const actuallyPlacedWords = wordsSortedByLength.filter((it) => {
        return Object.keys(search.placed).includes(it.word.toLowerCase())
    });
    //console.log(search.placed)
    // console.log('==========================================================================')
    // console.log(search.solved)

    return {
        props: {
            puzzle: search.grid,
            solved: search.solved,
            placed: search.placed, //arreglo de palabras
            originalWords: actuallyPlacedWords
        }
    };
};
