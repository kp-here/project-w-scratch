
import {QRCodeSVG} from 'qrcode.react';
import { useEffect } from 'react';
import Load from '../components/loader';
const Main2 = ({val,s}) => {
    useEffect(()=>{
        console.log(s);
    },[])

    return(
        <div>
            {(()=>{
               switch(val){
                case null:
                    return(
                        <div className="components">
                            <p id='big-main'>Connect to your WhatsApp</p>
                            <div id="connected-loader">
                                <Load/>
                                <p>Loading</p>
                            </div>
                        </div>
                    )
                case "connected":
                    return null
                default:
                    return(
                        <div className="components">
                            <p id='big-main'>Connect to your WhatsApp</p>
                            <div>
                                <p>Hi</p>
                                {/* <p>{s}</p> */}
                            </div>
                            <div id='qr-box'>
                                <QRCodeSVG value= {val} size={200} />
                            </div>
                            <p id="bott-text">Scan the QR Code to continue</p>
                        </div>
                        
                    )
            } 
            })()}
            {/* <p>Read our privacy policy</p> */}
        </div>
        
    )
}
export default Main2;
