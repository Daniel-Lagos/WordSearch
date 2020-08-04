import {useState} from 'react'
import styles from './letter.module.css'
const Letter = ({letter = ''}) => {
    const [selected, setSelected] = useState(false);
    return (
        <td className={`${styles.letter} ${selected ? styles.selected : ''}`}
            onClick={
                () => {
                    setSelected(!selected)
                }
            }>{letter}</td>
    )
}
export default Letter;