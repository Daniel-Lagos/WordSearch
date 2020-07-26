import styles from './word-search.module.css'

const words = [
    ['1', '3', '4', '7', '23', '23', '56'],
    ['11', '32', '44', '7', '23', '13', '56'],
    ['10', '33', '44', '7', '93', '23', '86']
]
const WordSearch = () => {
    return (<>
        <table className={styles.tableWord}>
            <tr>
                {
                    words.forEach(  index=>
                         Console.toLocaleString()
                    )
                }

                }
            </tr>
        </table>
    </>);

}
export default WordSearch;