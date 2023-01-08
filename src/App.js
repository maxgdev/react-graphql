import { useState } from "react";
import NavButtons from "./NavButtons";
import SearchBox from "./SearchBox";

function App() {
  const [userName, setUserName]= useState("Max");
  const [repoList, setRepoList]= useState(null);
  const [pageCount, setPageCOunt]= useState(10);
  const [queryString, setQueryString]= useState("");
  const [totalCount, setTotalCount]= useState(5);

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
        onTotalchange={(myNumber)=>{setPageCOunt(myNumber)}}
        onQueryChange={(myString)=>{setQueryString(myString)}}
      />
      <p>repo list...</p>
      <p>repo list...</p>
      <p>repo list...</p>
      <p>repo list...</p>
      <NavButtons />
    </div>
  );
}

export default App;
