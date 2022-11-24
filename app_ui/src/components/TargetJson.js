import React from 'react'



export default function TargetJson() {
  return (
    <div class="container mt-5">
        <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <h3>Target JSON:</h3>
        <hr/>
        
        <div class="form-group">  
        <textarea class="form-control" disabled={true} style={{height:"240px"}}></textarea>
        </div>
        
        <div class="form-group my-3">  
        <button type="submit" id="submit-code" class="btn btn-success">Download Target JSON file</button>
        </div>

    </div>
    </div>
    </div>
  )
}
