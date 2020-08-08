import {useContext} from 'react';
import WordSearchContext1, {NameContext} from "../word-search-context1";

const Name = () => {
    const {name, value: count, setValue: setCount} = useContext(NameContext);
    return (<>
        <p>{name}</p>
        <p>{count}</p>
        <button onClick={() => setCount({type:'aumentar'})}>Incrementar</button>
        <button onClick={() => setCount({type:'reducir'})}>Reducir</button>
    </>);
}
export default Name;