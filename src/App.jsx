import "./App.css";

function App() {
  function fechtData() {
    console.log("fetching data");
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
