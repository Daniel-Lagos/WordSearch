import styles from '../pages/index.module.css';
import MainTitle from "../components/main/main-tittle";
import GameButton from "../components/buttons/game-button";
import Link from "next/link";

const Index = (props) => {
    return (<>
        <div className={styles.mainContent}>
            <MainTitle title={'NEMO TGS'}/>
            <div className={styles.tgsIntroduction}>
                <p className={styles.introductionText}>La teoria General de sistemas es un conjunto de procedimeintos,
                    metodos, rutinas, tecnicas, maquinas
                    y equipos unidos por alguna forma de interaccion regulada para consturir un TODO ORGANIZADO.</p>
            </div>
            <div className={styles.gameContent}>
                <div className={styles.boxContent}>
                    <h3>Word Search</h3>
                    <p>Hola mundo</p>
                    <img className={styles.imageContent} src={'/images/wordSearch.png'} alt={''}/>
                    <Link href={'/word-search-game'}>
                    <a className={styles.startGame}>Start</a>
                    </Link>
                </div>
                <div className={styles.boxContent}>
                    <h3>Crossword</h3>
                    <p>Hola mundo</p>
                    <img className={styles.imageContent} src={'/images/crossword.png'} alt={''}/>
                    <Link href={'/word-search-game'}>
                        <a className={styles.startGame}>Start</a>
                    </Link>
                </div>
            </div>
        </div>
        <footer>
            <p>Hola</p>
        </footer>
    </>);
}
export default Index;