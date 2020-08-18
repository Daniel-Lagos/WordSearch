import MainTitle from '../components/main/main-tittle';
import wordsearch from '../utils/word-search-logic';
import Crossword from '../utils/crossword-logic';
import GameButton from '../components/buttons/game-button';
import Link from 'next/link';
import Head from 'next/head';
import styles from '../components/crossword-game.module.css';
import CrossWordContextWrapper from '../components/crossword-context-wrapper';

const CrossWordGame = (props) => {
    return (<>
        <Head>
            <title>CrossWord</title>
            <link href="https://fonts.googleapis.com/css2?family=Orbitron&display=swap"
                  rel="stylesheet"/>
        </Head>
        <MainTitle title={'CRUCIGRAMA'}/>
        <div className={styles.mainContent}>
            <div className={styles.optionsContent}>
                <GameButton text={'Juego nuevo'}/>
                <Link href={'/index'}>
                    <a className={styles.goBack}>Volver</a>
                </Link>
            </div>
            <br/>
            <CrossWordContextWrapper
                wordsContentClass={styles.wordsContent}
                mainContentClass={styles.mainContent}
                solvedWordClass={styles.solved}
                {...props}/>
        </div>
    </>);
};

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
    const selectedWords = randomWords.slice(0, 10);
    const wordsSortedByLength = selectedWords.sort((a, b) => {
        return a.word.length > b.word.length ? -1 : 1;
    });
    const size = Math.ceil(wordsSortedByLength[0].word.length);
    const wordsStrings = wordsSortedByLength.map((it) => {
        return it.word.toLowerCase();
    });

    const wordsMeanings = wordsSortedByLength.map((it) => it.meaning);

    const { grid: cw, unplaced } = Crossword(wordsStrings, wordsMeanings, 50);

    const csGrid = cw.map((row) => {
        return (row || []).map((col) => {
            if (col) {
                return {
                    ...col,
                    across: col.across
                        ? { ...col.across, first: col.across.is_start_of_word }
                        : null,
                    down: col.down ? { ...col.down, first: col.down.is_start_of_word } : null,
                };
            } else {
                return { char: '-' };
            }
        });
    });

    const wordsWithPositions = selectedWords.map((it) => ({ ...it, positions: [] }));
    const altCwGrid = csGrid.map((row, i) => {
        return (row || []).map((col, j) => {
            if (col.across) {
                wordsWithPositions[col.across.index].positions =
                    [...(wordsWithPositions[col.across.index].positions || []), [col.char, i, j]];
            }
            if (col.down) {
                wordsWithPositions[col.down.index].positions =
                    [...(wordsWithPositions[col.down.index].positions || []), [col.char, i, j]];
            }
            return [col.char, i, j];
        });
    });

    const search = await wordsearch(wordsStrings, size, size, { crossword: true });
    if (!search) return { props: {} };
    const actuallyPlacedWords = wordsSortedByLength.filter((it) => {
        return Object.keys(search.placed).includes(it.word.toLowerCase());
    });
    //console.log(search.placed)
    // console.log('==========================================================================')
    // console.log(search.solved)

    return {
        props: {
            puzzle: search.grid,
            solved: search.solved,
            placed: search.placed, //arreglo de palabras
            originalWords: selectedWords,
            cw: csGrid,
            cwAlt: altCwGrid,
            wordsWithPositions,
        }
    };
};
