import List from "../components/list/list";
import styles from './index.module.css'
import TittleWordSearch from "../components/main/main-tittle";
import WordSearch from "../components/word-search-table/word-search";
import Chronometer from "../components/chronometer/chronometer";
import FindWords from "../components/find-words/find-words";

const Index = () => {
    return (<>
            <TittleWordSearch/>
            <div className={styles.divleft}>
                <Chronometer/>
                <WordSearch/>
            </div>
            <div className={styles.divrigth}>
                <FindWords word={'CSS'}/>
                <FindWords word={'JAVASCRIPT'}/>
                <FindWords word={'NODEJS'}/>
                <FindWords word={'HTML'}/>
                <FindWords word={'REACT'}/>
            </div>

        </>
    );
};

export default Index;