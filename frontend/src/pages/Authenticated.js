
import {useEffect, useState, useContext} from 'react'
import { Link } from 'react-router-dom'

const Authenticated = ({pic,s}) => {

    // const [sock,setSock] = useState(s);
    // const s = useContext(UserContext)
    // console.log(s);
    // useEffect(()=>{
    //     console.log(s);
    //     // s.emit('pic','hi')

    // },[])
    
    return (
        <div>
            <div className="prev-step">
                <Link className="new" to="/"><img src="back.png"></img></Link>
                <p>Previous Step</p>
            </div>
            <div className="components">
                <p id='big-main'>Connected Successfully</p>
                <div id="prof-pic-stroke">
                    <img id="prof-pic" src="dp.jpg"></img>
                </div>
                <button type="submit" className='continue'>
                    <p  className="cont" >Continue</p>
                    <img  src='ontinue-btn.svg'></img>
                </button>
                
            </div>
        </div>
    )
}
export default Authenticated
