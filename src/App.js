import { useState } from "react";
import NavButtons from "./NavButtons";
import SearchBox from "./SearchBox";

function App() {
  const [userName, setUserName] = useState("Max");
  const [repoList, setRepoList] = useState(null);
  const [pageCount, setPageCOunt] = useState(10);
  const [queryString, setQueryString] = useState("");
  const [totalCount, setTotalCount] = useState(5);

  const DisplayRepo = () => {
    return (
      <ul className="list-group list-group-flush">
        <p>repo list...1</p>
        <p>repo list...2</p>
        <p>repo pst...3</p>
        <p>repo pst...4</p>
      </ul>
    )
  }
  return (
    <div className="App container mt-5">
      <h1 className="text-primary">
        <i className="bi bi-diagram-2-fill"></i> Repos
      </h1>
      <p>Hey there {userName}</p>
      <SearchBox
        totalCount={totalCount}
        pageCount={pageCount}
        queryString={queryString}
        onTotalchange={(myNumber) => { setPageCOunt(myNumber) }}
        onQueryChange={(myString) => { setQueryString(myString) }}
      />
      <DisplayRepo />
      <NavButtons />
    </div>
  );
}

export default App;
