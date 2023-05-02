import React, {useState} from "react";
import PropTypes from "prop-types";


export default function TextForm(props) {

    // hooks are use to change value of variable throughout the component without refreshing the page.
    // hooks declaration
    const [text, setText] = useState('');
  
    //change text
    // setText("Enter please");
    

    const handle = (event) =>{
        console.log("On change");
        setText(event.target.value);  // setText will trigger and change the value of text variable
    }
    const upcase = () => {
        console.log("Uppercase clicked");
        let upcase = text.toUpperCase(); 
        setText(upcase);
    }

    const lowcase = () => {
      console.log("Lowercase clicked");
      let lowcase = text.toLowerCase();
      setText(lowcase);
    }

    const clear = () => {
      console.log("Lowercase clicked");
      let clear = '';
      setText(clear);
    }

  return (
    <>
    <div className="container" style={{ color : props.mode === 'dark' ? 'white':'black'}}>
      <div className="mb-3">
      <h1>{props.Heading}</h1>
        <textarea className="form-control" value={text} onChange={handle} style={{ backgroundColor : props.mode === 'dark' ? '#212529':'white' , color : props.mode === 'dark' ? 'white':'black'}}
        id="exampleFormControlTextarea1" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={upcase}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-3" onClick={lowcase}>Convert to Lowercase</button>
      <button className="btn btn-success mx-3" onClick={clear}>Clear</button>
    </div>
    <div className="container my-4" style={{ color : props.mode === 'dark' ? 'white':'black'}}>
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>Time taken to read : {0.008 * text.split(" ").length}</p>
      <h3>Your text Preview</h3>
      <p>{text.length === 0 ? 'Enter something in textbox' : text}</p>
    </div>
    </>
  );
}

TextForm.propTypes = {
    Heading: PropTypes.string.isRequired
}

TextForm.defaultProps = {
    Heading : "Enter Heading"
}