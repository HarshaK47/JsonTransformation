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
    <div>
    <Navbar className="navbar navbar-dark bg-primary">
        <NavbarBrand href="/">JSON Transform</NavbarBrand>
    </Navbar>


    <div className="App m-5">
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
                className="form-control"
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
            <div className="mt-3">
              {checked === true ? (
                
                <select name="selectList"  id="selectList" className="form-control">
                  <option value="option 1">SBI Mapper</option>
                  <option value="option 2">Kotak Mapper</option>
                </select>
            
            ) : (
              <input type="file" className="form-control" id="myFile" name="filename" />
            )}
            </div>
          </div>
          <div className="submit-button">
            <button className="sbmit btn btn-primary" type="submit">
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
                className="form-control"
                // onChange={prettyPrint}
              />
            </div>

            <button className="sbmit btn btn-success" type="submit">
              Generate Target JSON
            </button>
      </div>
    </div>
    </div>
  );
}

export default App;
