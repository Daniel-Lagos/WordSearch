import List from "../components/list/list";
import TittleWordSearch from "../components/main/main-tittle";
import WordSearch from "../components/word-search-table/word-search";
import Chronometer from "../components/chronometer/chronometer";

const Index = () => {
    return (<>
            <div>
                <TittleWordSearch/>
                <Chronometer/>
                <WordSearch/>
            </div>

        </>
    );
};

export default Index;