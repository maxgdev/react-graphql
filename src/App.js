import NavButtons from "./NavButtons";
import SearchBox from "./SearchBox";

function App() {
  return (
    <div className="App container mt-5">
      <h1 className="text-primary">
        <i className="bi bi-diagram-2-fill"></i> Repos
      </h1>
      <p>Hey there (userName)</p>
      <SearchBox />
      <p>repo list...</p>
      <p>repo list...</p>
      <p>repo list...</p>
      <p>repo list...</p>
      <NavButtons />
    </div>
  );
}

export default App;
