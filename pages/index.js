import List from "../components/list/list";
import styles from './index.module.css'
import TittleWordSearch from "../components/main/main-tittle";
import WordSearch from "../components/word-search-table/word-search";
import Chronometer from "../components/chronometer/chronometer";
import FindWords from "../components/find-words/find-words";

const Index = () => {
    return (<>
            <head>
                <title>Word Search</title>
            </head>
            <div className={styles.divBackground}>
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
                    <FindWords word={'JAVA'}/>
                    <FindWords word={'SOFTWARE'}/>
                    <FindWords word={'HARDWARE'}/>
                    <FindWords word={'PHP'}/>
                    <FindWords word={'WEB'}/>

                </div>
            </div>
        </>
    );
};

export default Index;