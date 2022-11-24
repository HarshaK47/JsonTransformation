import React from 'react'

export default function InputImageForm() {
  return (
        <div className="mb-3">
            <label for="formFile" className="form-label">Upload CSV file here</label>
            <input className="form-control" type="file" id="formFile" />
    </div>
    )
}
