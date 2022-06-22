//select files page
import {useEffect,useState} from 'react'
import { Link } from 'react-router-dom'

const FileSelection = () => {
    const [file,setFile] = useState(null);
    const [text,setText] = useState("");
    
    
    const handleFileChange = (e)=>{
        setFile(e.target.files[0])
        console.log(e.target.files[0]);
    }

    const handleTextChange = (e)=>{
        setText(e.target.value)
        console.log(e.target.value);
    }

    
    const handleClick = (e)=>{
        
        e.target.classList.add("continue-active")
        setTimeout(()=>{
            e.target.classList.remove("continue-active")

        },1000)

    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        const formData = new FormData()
        formData.append("file",file)
        formData.append("text",text)
        console.log(formData);
        
        // console.log('submited');
    }
    return (
        <div>
            <div className="prev-step">
                <Link className="new" to="/"><img src="back.png"></img></Link>
                <p>Previous Step</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="components">
                    <p id='big-main'>Group Broadcast</p>
                    <label for="file">
                        Select files
                        <input onChange={handleFileChange} id="file" type="file"></input>
                    </label>
                    
                    <textarea onChange={handleTextChange} className ="tarea" placeholder="Type in some content"></textarea>
                    <button type="submit" className='continue' onClick={handleClick}>
                        <p  className="cont" >Continue</p>
                        <img src='ontinue-btn.svg'></img>
                    </button>
                </div>
            </form>
        </div>
    )
}
export default FileSelection