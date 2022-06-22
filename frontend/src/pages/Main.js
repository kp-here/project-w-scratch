
import {QRCodeSVG} from 'qrcode.react';
import { renderMatches } from 'react-router-dom';
import Load from '../components/loader';
const Main = ({val}) => {

    return(
        <div className="components">
            
            <p id='big-main'>{(()=>{
                switch(val){
                    case "connected":
                        return("Succesfully Connected")
                    default:
                        return("Connect to your WhatsApp")
                }
            })()}</p>
            {val && val!=='connected'?<p>Hi</p>:null}
            {(()=>{
                switch(val){
                    case null:
                        return(
                            <div id="connected-loader">
                                <Load/>
                                <p>Loading</p>
                            </div>
                        )
                    case "connected":
                        return null
                    default:
                        return(
                            <div id='qr-box'>
                                <QRCodeSVG value= {val} size={200} />
                            </div>
                        )
                }
            })()}
            {val && val!=='connected'?<p id="bott-text">Scan the QR Code to continue</p>:null}
        </div>
    )
}
export default Main;
