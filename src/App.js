import { useCallback, useState, useEffect } from "react";
import NavButtons from "./NavButtons";
import SearchBox from "./SearchBox";
import RepoInfo from "./RepoInfo";
import query from "./Query";
import github from "./gitDB"

function App() {
  const [userName, setUserName] = useState("");
  const [repoList, setRepoList] = useState(null);
  const [pageCount, setPageCOunt] = useState(10);
  const [queryString, setQueryString] = useState("");
  const [totalCount, setTotalCount] = useState(null);

  const [startCursor, setStartCursor] = useState(null);
  const [endCursor, setEndCursor] = useState(null);
  const [hasPreviousPage, setHasPreviousPage] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [paginationKeyword, setPaginationKeyword] = useState("first");
  const [paginationString, setPaginationString] = useState("");


  // using useCallBack ?? memoisation ??
  const fetchData = useCallback(() => {
    const queryText = JSON.stringify(
      query(pageCount, queryString, paginationKeyword, paginationString)
    );

    let requestOptions = {
      method: 'POST',
      headers: github.headers,
      body: queryText,
    };

    fetch(github.baseURL, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        const viewer = data.data.viewer;
        const repos = data.data.search.edges;
        const total = data.data.search.repositoryCount;
        const start = data.data.search.pageInfo?.startCursor;
        const end = data.data.search.pageInfo?.endCursor;
        const next = data.data.search.pageInfo?.hasNextPage;
        const prev = data.data.search.pageInfo?.hasPreviousPage;

        setUserName(viewer.name);
        setRepoList(repos);
        setTotalCount(total);
        setStartCursor(start);
        setEndCursor(end);
        setHasNextPage(next);
        setHasPreviousPage(prev);
      })
      .catch((error) => { console.log(error) });

  }, [pageCount, queryString, paginationString, paginationKeyword]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const DisplayRepo = () => {
    return (
      <>
        {repoList && (
          <ul className="list-group list-group-flush">
            {repoList.map((repoItem)=> (
              <RepoInfo key={repoItem.node.id} repo={repoItem.node} />
            ))}
          </ul>
        )}
      </>
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
        onTotalchange={(totalChangeNumber) => { setPageCOunt(totalChangeNumber) }}
        onQueryChange={(queryString) => { setQueryString(queryString) }}
      />

      <DisplayRepo />

      <NavButtons 
        start={startCursor}
        end={endCursor}
        next={hasNextPage}
        previous={hasPreviousPage}
        onPage={(myKeyword, myString) => {
          setPaginationKeyword(myKeyword);
          setPaginationString(myString);
        }}
      />
    </div>
  );
}

export default App;
