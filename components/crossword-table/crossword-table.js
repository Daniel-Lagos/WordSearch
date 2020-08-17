import Letter from "../word-search-letter/letter";
import styles from "../crossword-table/crossword-table.module.css";

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
                                        <Letter key={indey} letter={letter} x={index} y={indey}/>
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

const CrossWord = ({wordsString = []}) => {
    return (<>
        <table className={styles.tableWord}>
            <tbody>
            {generateWords(wordsString)}
            </tbody>
        </table>
    </>);

}
export default CrossWord;