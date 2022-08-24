import "./App.css";
import MainContainer from "./components/MainContainer";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();

  const students = useSelector((state) => state.students.students);
  const frontendTeam = useSelector((state) => state.frontend.frontendTeam);
  const backendTeam = useSelector((state) => state.backend.backendTeam);
  const inputValue = useSelector((state) => state.input.inputValue);
  return (
    <div className="topcontainer">
      <h1>Student Team React Challenge</h1>
      <input
        type="text"
        placeholder="Add Person"
        value={inputValue}
        onChange={(e) =>
          dispatch({
            type: "SET_INPUT",
            payload: e.target.value,
          })
        }></input>
      <button
        className="button-24"
        onClick={() => {
          dispatch({ type: "ADD", payload: inputValue });
        }}>
        ADD
      </button>
      <button className="button-24" onClick={() => dispatch({ type: "RESET" })}>
        Reset
      </button>
      <div className="App">
        <MainContainer students={students} frontendTeam={frontendTeam} backendTeam={backendTeam}/>
      </div>
    </div>
  );
}

export default App;
