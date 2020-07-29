import styles from './word-search.module.css'

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
                                row.map((word, index) => {
                                    return (
                                        <td key={index}>{word}</td>
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