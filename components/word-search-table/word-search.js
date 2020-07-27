import styles from './word-search.module.css'

const words = [
    ['1', '3', '4', '7', '23', '23', '56'],
    ['11', '32', '44', '7', '23', '13', '56'],
    ['10', '33', '44', '7', '93', '23', '86']
]
const arrayWord = () => {
    return (<>
        <tr>
            {

            }
        </tr>
    </>);
}

const WordSearch = () => {
    return (<>
        <div className={styles.tableBox}>
            <table className={styles.tableWord}>
                <tr>
                    {
                        arrayWord()
                    }
                </tr>
            </table>
        </div>
    </>);

}
export default WordSearch;