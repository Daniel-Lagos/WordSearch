import styles from './find-words.module.css';
import {useContext} from 'react';
import {WordContext} from "../word-search-context";

const FindWords = ({wordsList, wordsPlaced}) => {
    const {value} = useContext(WordContext);
    const resolveWords = (word) => {
        let numberCorrectPositions = 0;
        const positionsWord = wordsPlaced[word] || []
        positionsWord.forEach((element) => {
            value.forEach((position) => {
                if (element[0] === position[1] && element[1] === position[0])
                    numberCorrectPositions += 1;
            })
        })
        return numberCorrectPositions === word.length;
    }
    const solvedWords = () => {
        let complete = true
        wordsList.forEach((word) => {
            if (!resolveWords(word.word))
                complete = false
        })
        if (complete)
            alert("Felicitaciones, Completaste La sopa de letras")
    }
    solvedWords()
    return (<>
        <ul className={styles.wordBox}>
            {
                wordsList.map((word, index) => {

                        return (
                            <li className={resolveWords(word.word) ? styles.solved : ""} key={index} onClick={() => {
                                alert(word.meaning);
                            }}>{word.word}</li>
                        )
                    }
                )
            }
        </ul>
    </>)
}
export default FindWords;