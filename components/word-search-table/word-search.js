import styles from './word-search.module.css'
import Letter from "../word-search-letter/letter";

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

const WordSearch = ({wordsString = []}) => {
    return (<>
        <table className={styles.tableWord}>
            <tbody>
            {generateWords(wordsString)}
            </tbody>
        </table>
    </>);

}
export default WordSearch;