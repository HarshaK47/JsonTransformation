import React, { useRef } from 'react'

export default function InputTextArea() {

    const textRef = useRef("");

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(textRef.current.value);
    }

  return (
    <div className="mb-3" >
    <form action="" onSubmit={handleSubmit} className="m-auto">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Source JSON data</label>
        <textarea className="form-control" ref={textRef} id="exampleFormControlTextarea1" rows="15"></textarea>

        <button type="submit" className="btn btn-primary m-2 mx-auto">Upload</button>
    </form>
    </div>
  )
}
