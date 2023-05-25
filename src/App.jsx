import "./App.css";
import Content from "./components/partials/Content";
import Search from "./components/search/Search";
import SearchResults from "./components/places/SearchResults";

function App() {
  return (
    <>
      <div className="container">
        <Content></Content>
        <Search></Search>
        <SearchResults></SearchResults>
      </div>
    </>
  );
}

export default App;
