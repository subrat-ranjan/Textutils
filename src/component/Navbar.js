import React, { useState} from 'react'

export default function Navbar(props) {
  const [text, setText] = useState("");

  const handleUpCliclk = ()=>{
   // console.log("upper case was clicked" + text);
   if(!text) return
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to Upper Case", "success");
  }
  const handleLowCliclk =()=>{
    if(!text) return
    let lowText = text.toLocaleLowerCase();
    setText(lowText)
    props.showAlert("Converted to Lower Case", "success");
  }
  const handleExtra =()=>{
    if(!text) return
    let Extra = text.trim().split(/ +/).join(' ');
    setText(Extra)
    props.showAlert("Extra spaces are successfully removed", "success");
  }
  const handleCopy =()=>{
    if(!text) return
     let myBoxTxt=document.getElementById("myBox");
     myBoxTxt.select();
     navigator.clipboard.writeText(myBoxTxt.value);
     props.showAlert("text Copied","success");
 }
  const clear = ()=>{
    if(!text) return
    let Clear="";
    setText(Clear)
    props.showAlert("You cleared the text area", "success");
  }
  const handleOnChange = (event)=>{
    //console.log("on change")
    setText(event.target.value);
  }

    //text="new text"  wrong way
  //setText("new text"); correct wway
console.log(text.split(" ").length)

function countWords(str) {
  const arr = str.split(' ');

  return arr.filter(word => word !== '').length;
}

  return (
    <>
      <div className="container">
         <h1>{props.heading}</h1>
            <div className="mb-3">
             <textarea className="form-control" value={text} onChange={handleOnChange}
             style={{backgroundColor: props.theme ==='light' ? 'whitesmoke': 'gray', color:props.theme ==='light' ? 'black': 'white'}}  id="myBox" rows="8"></textarea>
            </div> 
             <button className="btn btn-primary mx-2 my-2" onClick={handleUpCliclk}> Convert to Upper case</button>
             <button className="btn btn-primary mx-2 my-2" onClick={handleLowCliclk}> Convert to Lower case</button>
             <button className="btn btn-primary mx-2 my-2" onClick={handleExtra}> Remove extra space</button>
             <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}> Copy</button>
             <button className="btn btn-primary mx-2 my-2" onClick={clear}>Clear</button>
             
      </div>
       <div className="container my-3">
          <h2>Your text summary</h2>
          <p> {countWords(text)} Words and {text.length} Characters {text}</p>
          <p>{0.008 * countWords(text)} Minutes read</p>
          <h2>Preview</h2>
          <p>{text.length>0 ? text: "Enter something in the above textbox to Preview here"}</p>
       </div>

    </>
  )
}
