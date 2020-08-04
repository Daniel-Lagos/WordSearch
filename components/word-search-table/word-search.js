import styles from './word-search.module.css'
import Letter from "../word-search-letter/letter";

const words = [
    ['a', 'b','a', 'b','a', 'b','a', 'b','a', 'b'],
    ['a', 'b','a', 'b','a', 'b','a', 'b','a', 'b'],
    ['a', 'b','a', 'b','a', 'b','a', 'b','a', 'b'],
    ['a', 'b','a', 'b','a', 'b','a', 'b','a', 'b'],
    ['a', 'b','a', 'b','a', 'b','a', 'b','a', 'b'],
    ['a', 'b','a', 'b','a', 'b','a', 'b','a', 'b'],
    ['a', 'b','a', 'b','a', 'b','a', 'b','a', 'b'],
    ['a', 'b','a', 'b','a', 'b','a', 'b','a', 'b'],
    ['a', 'b','a', 'b','a', 'b','a', 'b','a', 'b'],
    ['a', 'b','a', 'b','a', 'b','a', 'b','a', 'b']
]

const generateWords = () => {
    return (
        <>
            {
                words.map((row, index) => {
                    return (
                        <tr key={index}>
                            {
                                row.map((letter, index) => {
                                    return (
                                       <Letter key={index} letter={letter}/>
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

const WordSearch = () => {
    return (<>
        <table className={styles.tableWord}>
            <tbody>
                {generateWords()}
            </tbody>
        </table>
    </>);

}
export default WordSearch;