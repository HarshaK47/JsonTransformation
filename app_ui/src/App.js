import { useState } from "react";
import ExistingItemsDropdown from "./components/ExistingItemsDropdown";
import InputImageForm from "./components/InputImageForm";
import InputTextArea from "./components/InputTextArea";
import Navbar from "./components/Navbar";

function App() {
  const [checked, setChecked] = useState(false);


  return (
    <>
    <Navbar/>
    <div className="container">
      <InputTextArea/>
      <div className="container m-auto">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" onChange={() => setChecked(!checked)} checked={checked} id="flexCheckDefault" />
        <label class="form-check-label" for="flexCheckDefault">
          Select Existing Mapper
        </label>
      </div>
      {checked ? <ExistingItemsDropdown/> : <InputImageForm/>}
    </div>
      </div>
    </>
  );
}

export default App;
