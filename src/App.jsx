import "./App.css";

function App() {
  function fechtData(param) {
    console.log("fetching ", param);
  }
  return (
    <>
      <main>
        <button onClick={fechtData}>Fetch Data</button>
      </main>
    </>
  );
}

export default App;
