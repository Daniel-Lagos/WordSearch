import styles from "../crossword-letter/letter-crossword.module.css";

const LetterCrossWord = ({letter = '', x = '', y = ''}) => {
    return (
        <td className={`${styles.letter} ${letter === '-' ? styles.black : ''}`}>
            <input className={`${styles.input} ${letter === '-' ? styles.empty : ''}`} type='text'/>
        </td>
    )
}
export default LetterCrossWord;