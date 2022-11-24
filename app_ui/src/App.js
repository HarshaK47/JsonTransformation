import React, { useRef, useState } from "react";
import "./App.css";

import { Navbar, NavbarBrand } from "reactstrap";

function App() {
  const [checked, setChecked] = useState(false);
  const textRef = useRef("");

  const prettyPrint = () => {
    var obj = JSON.parse(textRef.current.value);
    var pretty = JSON.stringify(obj, null, 4);
    textRef.current.value = pretty;

    console.log(textRef.current.value);
  };

  const setInputHandler = () => {};

  return (
    <>
    <Navbar>
        <NavbarBrand href="/">JSON Transform</NavbarBrand>
      </Navbar>
    <div className="App">
      <div className="input-params-area">
      

      <form onSubmit={() => {}}>
        <div className="input-disp">
          <div className="input-params">
            <div className="text-area">
              <div>Source JSON:</div>
              <textarea
                id="myTextArea"
                ref={textRef}
                cols={50}
                rows={12}
                onChange={prettyPrint}
              />
            </div>
            <div className="checkBox-input">
              <label>
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => setChecked(!checked)}
                />
                &nbsp;Select from already existing Mapping Files
              </label>
            </div>
            {checked === true ? (
              <div className="dropdown">
                <select name="selectList" id="selectList">
                  <option value="option 1">SBI Mapper</option>
                  <option value="option 2">Kotak Mapper</option>
                </select>
              </div>
            ) : (
              <input type="file" id="myFile" name="filename" />
            )}
          </div>
          <div className="submit-button">
            <button className="sbmit" type="submit">
              Generate JSON Transformation Code
            </button>
          </div>
        </div>
      </form>
      </div>

      <div className="output-params-area">
      <div className="text-area2">
              <div>Target JSON output generation Code:</div>
              <textarea
                id="myTextArea2"
                cols={50}
                rows={12}
                // onChange={prettyPrint}
              />
            </div>

            <button className="sbmit" type="submit">
              Generate Target JSON
            </button>
      </div>
    </div>
    </>
  );
}

export default App;
