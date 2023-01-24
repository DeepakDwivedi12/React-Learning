import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick= ()=>{
        console.log("UpperCase was clicked"+text);
        let newText=text.toUpperCase();
        setText(newText); 
    }

    const handleLoClick= ()=>{
        console.log("LowerCase was clicked"+text);
        let newText=text.toLowerCase();
        setText(newText); 
    }

    const handleClearClick = ()=>{ 
        let newText = '';
        setText(newText)
    }

    const handleCopy = () => {
        console.log("I am copy");
        var text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const handleOnChange= (event)=>{
        console.log("On change ");
        setText(event.target.value);
    }
    const [text,setText]= useState('');
    return (
        <>
        <div className="container"  style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="form-group">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-secondary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-danger mx-1" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-warning mx-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-info mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{ 0.008 *text.split(" ").length} Minutes read</p>
            <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
        </div>
        </>
    )
}
