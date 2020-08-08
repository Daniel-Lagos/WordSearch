import {createContext, useReducer} from 'react';
import Name from "./example-component/Name";

const controlAction = (data, action) => {
    if (action.type === 'aumentar')
        return (data + 1)
    else
        return (data > 0 ? data - 1 : 0);
}

const NameContext = createContext('wordSearch.png');
/*const {nombre} = useReducer(functionReducer(data,action))*/
const WordSearchContext1 = () => {
    const [value, setValue] = useReducer(controlAction, 1);
    return (<NameContext.Provider value={{name: 'Daniel', value, setValue}}>
            <Name/>
        </NameContext.Provider>
    )
}
export {NameContext};
export default WordSearchContext1;