import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AddProduct from "./Components/addComponents";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AddProduct />
      </header>
    </div>
  );
}

export default App;
