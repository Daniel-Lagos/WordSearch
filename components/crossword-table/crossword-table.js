import Letter from "../word-search-letter/letter";
import styles from "../crossword-table/crossword-table.module.css";
import LetterCrossWord from "../crossword-letter/letter-crossword";

const generateWords = (wordsString) => {
    return (
        <>
            {
                wordsString.map((row, index) => {
                    return (
                        <tr key={index}>
                            {
                                row.map((letter, indey) => {
                                    return (
                                        <LetterCrossWord key={indey} letter={letter} x={index} y={indey}/>
                                    )
                                })
                            }
                        </tr>
                    )
                })
            }
        </>
    )
}

const CrossWord = ({wordsString = [], cw= []}) => {
    return (<>
        <table className={styles.tableWord}>
            <tbody>
            {generateWords(cw)}
            </tbody>
        </table>
    </>);

}
export default CrossWord;
