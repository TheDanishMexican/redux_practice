import "./App.css";
import ColorChanger from "./components/ColorChanger";
import Counter from "./components/Counter";

function App() {
  return (
    <>
      <div>
        <h1>Redux test</h1>
        <Counter />
        <ColorChanger />
      </div>
    </>
  );
}

export default App;
