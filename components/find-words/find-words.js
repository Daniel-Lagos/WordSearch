import styles from './find-words.module.css'
const FindWords = ({word}) => {
    return (<>
        <div className={styles.wordBox}>
            <p className={styles.wordBox}>{word}</p>
        </div>
    </>)
}
export default FindWords;