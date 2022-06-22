
import {useEffect, useState, useContext} from 'react'
import { Link } from 'react-router-dom'
import Load from '../components/loader'

const Connected = ({pic,s}) => {
    const [pict,setPict] = useState(null)
    useEffect(()=>{
        setPict(pic)
    },[])
    
    return (
        <div>
            <div className="prev-step">
                <Link className="new" to="/"><img src="back.png"></img></Link>
                <p>Previous Step</p>
            </div>
            <div className="components">
                <p id='big-main'>Connected Successfully</p>
                {pict 
                ?<div> 
                    <div id="prof-pic-stroke">
                        <img id="prof-pic" src={pict}></img>
                    </div>
                    <button type="submit" className='continue'>
                        <p  className="cont" >Continue</p>
                        <img  src='ontinue-btn.svg'></img>
                    </button>
                </div>
                :<div id="connected-loader">
                        <Load/>
                        <p>Loading..</p>
                </div>}
                
                
                
            </div>
        </div>
    )
}
export default Connected
