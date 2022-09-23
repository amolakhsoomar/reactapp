import React, {useState} from 'react'
export default function TextForm(props) {
    const handleUpClick = ()=>{
        let uc = text.toUpperCase();
        setText(uc);
    }

    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
    
    const [text, setText] = useState('');
    
    return ( 
        <>
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" id="myBox" rows="8" onChange={handleOnChange} value={text}></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to upercase</button>
    </div>
    <div className='container my-3'>
        <h2>Text summary</h2>
        <p>{text.split(" ").length} words and {text.length}  chars</p>
        <h1> Preview</h1>
        <p>{text}</p>
    </div>
    </>
  )
}
