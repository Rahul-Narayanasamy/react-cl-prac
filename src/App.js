import "./App.css";

import ControlledForm from "./ControlledForm";
import UncontrolledForm from "./UncontrolledForm";
import WithClassNames from "./WithClassNames";
// import ClassNamesPractice from './ClassNamesPractice';
import WithoutClassNames from "./WithoutClassNames";

function App() {
  return (
    <div className="App">
      <p>Main Component - App</p>
      <h1>ClassNames library practice</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
        }}
      >
        <WithoutClassNames success={true} isActive={false} />
        <WithClassNames alert={true} isActive={true} />
      </div>
      <div>
        <h2>Controlled Form</h2>
        <ControlledForm />
      </div>
      <div>
        <h3>Uncontrolled Form</h3>
        <UncontrolledForm />
      </div>
    </div>
  );
}

export default App;
