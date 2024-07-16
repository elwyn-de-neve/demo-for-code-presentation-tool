import "./App.css";

function App() {
  function fechtData(param) {
    console.log("fetching ", param);
  }

  return (
    <>
      <main>
        {/* This will call the function immediately */}
        <button onClick={fechtData("data")}>Fetch Data</button>
      </main>
    </>
  );
}

export default App;
