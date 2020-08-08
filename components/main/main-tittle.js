import styles from './tittle.module.css'

const MainTitle = ({title = ''}) => {
    return (
        <h1 className={styles.tittle}>{title}</h1>
    );
}
export default MainTitle;