import Weather from "./component/weather/Weather";
import './app.scss';
import Modal from "./component/modal/Modal";

function App() {
  return (
    <div className="App">
      <Modal/>
      <Weather />
    </div>
  );
}

export default App;
