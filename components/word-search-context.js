import {createContext, useReducer} from 'react'
import Letter from "./word-search-letter/letter";
import FindWords from "./find-words/find-words";
import WordSearch from "./word-search-table/word-search";
import styles from "../pages/word-search-game.module.css";

const wordAction = (data, action) => {
    //valor del action es lo que yo le paso a la funcion
    if (!action.selected)
        return [...(data || []), [action.x, action.y]];
    else
        return data.filter((it) => (action.x !== it[0] && action.y !== it[1]));
}

const WordContext = createContext('wordSearch');

const WordSearchContext = (props) => {
    const [value, setValue] = useReducer(wordAction, [])
    return (<WordContext.Provider value={{value, setValue}}>
        <div className={styles.gameWordSearch}>
            <WordSearch wordsString={props.puzzle}/>
        </div>
        <div className={styles.gameWordsList}>
            <FindWords wordsList={props.originalWords} wordsPlaced={props.placed}/>
        </div>
    </WordContext.Provider>);
}
export {WordContext};
export default WordSearchContext;