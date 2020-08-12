import {useState, useContext} from 'react'
import styles from './letter.module.css'
import WordSearchContext, {WordContext} from "../word-search-context";


const Letter = ({letter = '', x = '', y = ''}) => {
    const [selected, setSelected] = useState(false);
    const {setValue} = useContext(WordContext)
    return (
        <td className={`${styles.letter} ${selected ? styles.selected : ''}`}
            onClick={
                () => {
                    setValue({selected,x,y})
                    setSelected(!selected)
                }
            }>{letter}</td>
    )
}
export default Letter;