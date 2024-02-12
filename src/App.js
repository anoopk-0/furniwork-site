import "./App.scss";
import { Home, NavBar } from "./layouts";

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        <Home />
      </main>
    </div>
  );
}

export default App;
