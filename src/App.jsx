import "./App.css";

function App() {
  const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

  function getRandomHexIndex() {
    return Math.floor(Math.random() * hex.length);
  }
  const handleClick = (e) => {
    const hexColor = document.querySelector(".color");
    const bgColor = document.getElementById("root");
    e.preventDefault();

    let randomHexColor = "#";

    for (let i = 0; i < 6; i++) {
      randomHexColor += hex[getRandomHexIndex()];
    }

    hexColor.textContent = randomHexColor;
    bgColor.style.backgroundColor = randomHexColor;
  };

  return (
    <div className="App">
      <div className="container">
        <h1>
          BackgroundColor: <span className="color">#FFFFFF</span>
        </h1>
        <button className="btn" onClick={handleClick}>
          Change Color
        </button>
      </div>
    </div>
  );
}

export default App;
