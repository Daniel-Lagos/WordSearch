import styles from './find-words.module.css';
import {useContext} from 'react';
import {WordContext} from "../word-search-context";

const FindWords = ({wordsList, wordsPlaced}) => {
    const {value, setValue} = useContext(WordContext);
    const resolveWords = (words) => {

        //buscar words en solved words y comparo los xy de value
        //value compararlo con el resolve words
        return false;
    }

    return (<>
        <ul className={styles.wordBox}>
            {
                wordsList.map((words, index) => {
                        return (
                            <li className={resolveWords(words) ? styles.solved : ""} key={index} onClick={() => {
                                console.log(words.meaning);
                            }}>{words.word}</li>
                        )
                    }
                )
            }
        </ul>
    </>)
}
export default FindWords;