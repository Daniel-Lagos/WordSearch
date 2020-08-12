import styles from './buttons.module.css'

const GameButton = ({text}) => {
    return (
        <button className={styles.buttonNewGame} onClick={()=>{
            window.location.reload();
        }}>{text}</button>
    )
}
export default GameButton;