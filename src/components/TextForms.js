//type rfc shortcut for default react template
import React, {useState} from 'react'

export default function TextForms(props) {

    const handleUpClick = ()=>{
        console.log("handleUpClick clicked...");
        let uppCase = text.toUpperCase();
        setText(uppCase);
        props.showAlert("Converted to uppercase ","success");
    }

    const handlelowerClick = ()=>{
        console.log("handlelowerClick clicked...");
        let lowerCase = text.toLowerCase();
        setText(lowerCase);
        props.showAlert("Converted to lowercase ","success");
    }

    const handleClearClick = ()=>{
        console.log("handleClearClick clicked...");
        setText("");
        props.showAlert("Text has been cleared ","success");
    }

    function removeSpacesClick() {
        console.log("removeSpacesClick clicked...");
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed extra spaces from the text ","success");
    }

    const handleOnChange = (event)=>{
        console.log("handleOnChange called...");
        setText(event.target.value);
    }

    const [text, setText] = useState('');

    return (
        <>
        <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
            <div className="mb-3">
                <h1>{props.heading}</h1>
                {/* onChange is used here because we are using state variable - text and we have to update that variable */}
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handlelowerClick}>Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear</button>
            <button className="btn btn-primary mx-2" onClick={() =>  navigator.clipboard.writeText(text)}>Copy</button>
            <button className="btn btn-primary mx-2" onClick={removeSpacesClick}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h1>Your text summary</h1>
            <p>{text.split(" ").length-1} words, {text.length} characters</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in above textbox to preview it here..."}</p>
        </div>
        </>
    )
}
