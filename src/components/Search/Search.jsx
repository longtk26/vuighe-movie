import SearchContext from "./SearchContext";
import SearchInput from "./SearchInput";

function Search({ navbar }) {
    return (
        <SearchContext>
            <SearchInput navbar={navbar} />
        </SearchContext>
    );
}

export default Search;
