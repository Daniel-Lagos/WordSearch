import LetterCrossWord from '../crossword-letter/letter-crossword';
import styles from '../crossword-table/crossword-table.module.css';

const generateWords = (wordsString, originalWords) => {
    return (
        <>
            {
                wordsString.map((row, index) => {
                    return (
                        <tr key={index}>
                            {
                                row.map((letter, indey) => {
                                    return (
                                        <LetterCrossWord key={indey} letter={letter} x={index}
                                                         y={indey} originalWords={originalWords}/>
                                    );
                                })
                            }
                        </tr>
                    );
                })
            }
        </>
    );
};

const CrossWord = ({ wordsString = [], cw = [], originalWords =[] }) => {
    return (<>
        <table className={styles.tableWord}>
            <tbody>
                {generateWords(cw, originalWords)}
            </tbody>
        </table>
    </>);

};
export default CrossWord;
