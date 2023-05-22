import "./App.css";
import Content from "./components/partials/Content";
import Search from "./components/search/Search";

function App() {
  return (
    <>
      <div className="container">
        <Content></Content>

        <Search></Search>
      </div>
    </>
  );
}

export default App;
