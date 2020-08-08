import styles from './buttons.module.css'

const GameButton = ({text}) => {
    return (
        <button className={styles.buttonNewGame}>{text}</button>
    )
}
export default GameButton;