import styles from './find-words.module.css';
import {useContext} from 'react';
const words = ['CSS', 'NodeJS', 'React', 'JavaScript', 'HTML'];

const FindWords = ({wordsList}) => {
    return (<>
        <ul className={styles.wordBox}>
            {
                wordsList.map((words, index) => {
                        return (
                            <li className={styles.wordBox} key={index}>{words.word}</li>
                        )
                    }
                )
            }
        </ul>
    </>)
}
export default FindWords;