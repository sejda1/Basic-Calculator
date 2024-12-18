import React, { useReducer } from 'react';
import reducer, { initialState } from './store/reducers/reducers.jsx';

import TotalDisplay from './components/TotalDisplay.jsx';
import CalcButton from './components/CalcButton.jsx';
import {
  changeOperation,
  clearDisplay,
  typeToScreen,
  equals,
  memoryAdd,
  memoryClear,
  memoryRecall,
} from './store/actions/actions.jsx';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleButtonClick = (value) => {
    dispatch(typeToScreen(Number(value)));
  };

  const handleChangeOperation = (value) => {
    dispatch(changeOperation(value));
  };

  const handleClearDisplay = () => {
    dispatch(clearDisplay());
  };

  const handleEquals = () => {
    dispatch(equals());
  };

  const handleMemoryAdd = () => {
    dispatch(memoryAdd());
  };

  const handleMemoryClear = () => {
    dispatch(memoryClear());
  };

  const handleMemoryRecall = () => {
    dispatch(memoryRecall());
  };

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand">Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b> {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b> {state.memory}
              </span>
            </div>
            <div className="row">
              <CalcButton value={'M+'} onClick={() => handleMemoryAdd()} />
              <CalcButton value={'MR'} onClick={() => handleMemoryRecall()} />
              <CalcButton value={'MC'} onClick={() => handleMemoryClear()} />
            </div>
            <div className="row">
              {[1, 2, 3].map((num) => (
                <CalcButton key={num} value={num} onClick={() => handleButtonClick(num)} />
              ))}
            </div>

            <div className="row">
              {[4, 5, 6].map((num) => (
                <CalcButton key={num} value={num} onClick={() => handleButtonClick(num)} />
              ))}
            </div>

            <div className="row">
              {[7, 8, 9].map((num) => (
                <CalcButton key={num} value={num} onClick={() => handleButtonClick(num)} />
              ))}
            </div>
            <div className="row">
              <CalcButton value={'+'} onClick={() => handleChangeOperation('+')} />
              <CalcButton value={0} onClick={() => handleButtonClick(0)} />
              <CalcButton value={'-'} onClick={() => handleChangeOperation('-')} />
            </div>
            <div className="row">
              <CalcButton value={'*'} onClick={() => handleChangeOperation('*')} />
              <CalcButton value={'/'} onClick={() => handleChangeOperation('/')} />
              <CalcButton value={'CE'} onClick={() => handleClearDisplay()} />
            </div>

            <div className="row eq_button">
              <CalcButton value={'='} onClick={() => handleEquals()} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
