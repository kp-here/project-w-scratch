import {QRCodeSVG} from 'qrcode.react';
import Load from './loader';
const QRCode = ({val}) => {
    
    return(
        <div >
            {val
                ?(val=='connected'
                    ?
                    null
                    :<div id='qr-box'>
                        <QRCodeSVG value= {val} size={300} />
                    </div>)
                :<div id="connected-loader">
                    <Load/>
                </div>
            }
        </div>
    )
}
export default QRCode;
