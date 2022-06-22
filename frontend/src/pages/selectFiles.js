// project w from scratch

import {useState } from "react";
import axios from 'axios'


const App = ()=>{

  const [val,setVal] = useState('');
  const [fil,setFil] = useState(null);
  const [radio,setRadio] = useState(null);
  
  
  
  const handleChange = (e)=>{
    setVal(e.target.value)
  }
  
  const handleRadio =(e)=>{

    setRadio(e.target.value)
  }

  const handleFileChange =(e)=>{
    setFil(e.target.files[0])
  }
  
  const handleSubmit =(e)=>{
    e.preventDefault()
    const formData = new FormData()
    formData.append('content',val)
    formData.append('file',fil)
    formData.append('radio',radio)
    axios.post('http://localhost:3001/notes',formData)
    // console.log(formData);
  }
  return(
    <div>
      <h1>Whatsapp automation</h1>

      <form onSubmit={handleSubmit}>

        <textarea onChange={handleChange} value={val}>hey</textarea>
        <br></br>

        <input type="file" onChange={handleFileChange}></input>

        <div onChange={handleRadio} value={radio}>
          <input type="radio" value="Male"/> Male
          <input type="radio" value="Female"/> Female
          <input type="radio" value="Other"/> Other
        </div>

        <button className="test" type ="submit">Upload</button>
      </form>
    </div>
  )
}
export default App