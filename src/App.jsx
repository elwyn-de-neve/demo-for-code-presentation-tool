import "./App.css";

function App() {
  function fechtData(param) {
    console.log("fetching ", param);
  }
  return (
    <>
      <main>
        <button onClick={fechtData("data")}>Fetch Data</button>
      </main>
    </>
  );
}

export default App;
