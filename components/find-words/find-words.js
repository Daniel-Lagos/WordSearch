import styles from './find-words.module.css'

const words = ['CSS', 'NodeJS', 'React', 'JavaScript', 'HTML'];

const FindWords = () => {
    return (<>
        <ul className={styles.wordBox}>
            {
                words.map((words, index) => {
                        return (
                            <li className={styles.wordBox} key={index}>{words}</li>
                        )
                    }
                )
            }
        </ul>
    </>)
}
export default FindWords;