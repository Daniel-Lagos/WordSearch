import { createContext, useReducer } from 'react';
import CrossWord from './crossword-table/crossword-table';

const crossWordReducer = (data, action) => {
    switch (action.type) {
        case 'update':
            const newData = [...data];
            const [char, x, y] = action.payload;
            const preData = { ...(newData[action.wordIndex] || {}) };
            preData[`${x}-${y}`] = char;
            newData[action.wordIndex] = { ...preData };
            return [...newData];
        default:
            return [...data];
    }
};

const CrossWordContext = createContext('cw');

const CrossWordContextWrapper = (props) => {
    const chunkSize = Math.ceil((props.originalWords || []).length / 2);
    const defFilledLetters = (props.originalWords || []).map(() => []);
    const [filledLetters, updateFilledLetters] = useReducer(crossWordReducer, defFilledLetters);

    const chunk = (arr, len = chunkSize) => {
        var chunks = [], i = 0, n = arr.length;
        while (i < n) { chunks.push(arr.slice(i, i += len)); }
        return chunks;
    };

    const checkIfWordIsSolved = (index) => {
        try {
            const wordLettersPositions = props.wordsWithPositions[index].positions || [];
            const [first, second] = wordLettersPositions;
            const sortByY = first[1] === second[1];
            const preFilledLetters = filledLetters[index];
            const filledLettersPositions = Object.keys(preFilledLetters).map((key) => {
                const [a, b] = key.split('-');
                return [preFilledLetters[key], parseInt(a, 10), parseInt(b, 10)];
            }).sort((a, b) => {
                const actA = sortByY ? a[2] : a[1];
                const actB = sortByY ? b[2] : b[1];
                return actA - actB;
            });
            const filledWord = filledLettersPositions.map((it) => it[0]).join('');
            if (filledWord.length <= 0) return '';
            const word = wordLettersPositions.map((it) => it[0]).join('');
            return word.toLowerCase() === filledWord.toLowerCase() ? props.solvedWordClass : '';
        } catch (e) {
            return '';
        }
    };

    const sharedData = {
        updateFilledLetters,
    };

    return (<CrossWordContext.Provider value={sharedData}>
        <div className={props.mainContentClass}>
            <CrossWord
                wordsString={props.puzzle}
                cw={props.cw}
                originalWords={props.wordsWithPositions}/>
            <br/><br/>
        </div>
        <br/>
        <div className={props.wordsContentClass}>
            {chunk(props.originalWords || [], chunkSize).map((chunk, x) => {
                return (<div key={x}>
                    <ul>
                        {chunk.map((word, i) => {
                            return (
                                <li key={i} className={checkIfWordIsSolved(i + (x * chunkSize))}>
                                    <p>
                                        <b>{i + (x * chunkSize) + 1}.</b> {word.meaning}&nbsp;
                                        <span>({word.word})</span>
                                    </p>
                                </li>);
                        })}
                    </ul>
                </div>);
            })}
        </div>
    </CrossWordContext.Provider>);
};

export { CrossWordContext };
export default CrossWordContextWrapper;
