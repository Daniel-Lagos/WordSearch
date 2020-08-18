import styles from '../pages/index.module.css';
import MainTitle from "../components/main/main-tittle";
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
                    <h3>Sopa de Letras</h3>
                    <p className={styles.p}>Encuentra las palabras que se te indican en el lado derecho, trata de
                        encontrarlas en el menor tiempo posible</p>
                    <img className={styles.imageContent} src={'/images/wordSearch.png'} alt={''}/>
                    <Link href={'/word-search-game'}>
                        <a className={styles.startGame}>Comenzar</a>
                    </Link>
                </div>
                <div className={styles.boxContent}>
                    <h3>Crucigrama</h3>
                    <p className={styles.p}>En base a las definiciones debes escribir el significado en cada uno de los
                        recuadros, debes completar todos los recuadros con las letras correctas.</p>
                    <img className={styles.imageContent} src={'/images/crossword.png'} alt={''}/>
                    <Link href={'/crossword-game'}>
                        <a className={styles.startGame}>Comenzar</a>
                    </Link>
                </div>
            </div>
        </div>
        <footer>

        </footer>
    </>);
}
export default Index;