import {createContext} from 'react'

const WordContext = createContext('wordSearch.png');

const WordSearchContext = () => {
    return (<WordContext.Provider value={''}>

    </WordContext.Provider>);
}
export {WordContext};
export default WordSearchContext;