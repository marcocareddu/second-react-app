import Component from "./Component";
import Card from "./Card";

function App() {
  return (
    <div className="App">
      <h1>Ciao a tutti</h1>
      <Component />
      <div className="d-flex justify-content-center row">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
