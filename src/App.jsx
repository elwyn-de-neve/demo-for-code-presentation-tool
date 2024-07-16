import "./App.css";

function App() {
  function fechtData(param) {
    console.log("fetching ", param);
  }

  return (
    <>
      <main>
        {/* This will call the function immediately */}
        {/*  Use a callback function to prevent this */}
        <button onClick={fechtData("data")}>Fetch Data</button>
      </main>
    </>
  );
}

export default App;
