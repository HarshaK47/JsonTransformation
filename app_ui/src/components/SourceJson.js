import React, {useState, useRef} from 'react'



export default function SourceJson() {
  const [checked, setChecked] = useState(false);
  const textRef = useRef("");

  const prettyPrint = () => {
    var obj = JSON.parse(textRef.current.value);
    var pretty = JSON.stringify(obj, null, 4);
    textRef.current.value = pretty;

    console.log(textRef.current.value);
  };

  const submitHandler = (e)=>{
    e.preventDefault()
  }

  return (
    <div class="container mt-5">
        <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <h3>Source JSON:</h3>
        <hr/>
        
        <form action="" onSubmit={submitHandler}>
            <div class="form-group">  
            <textarea class="form-control" style={{height:"240px"}} ref={textRef} onChange={prettyPrint}></textarea>
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

            <div class="form-group my-3">  
            <button type="submit" id="submit-code" class="btn btn-success">Generate Target JSON</button>
            </div>

        </form>
    </div>
    </div>
    </div>
  )
}
