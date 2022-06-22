//Testing Socket proj w
import { BrowserRouter, Routes, Route,useNavigate} from "react-router-dom";
import {useEffect, useState} from 'react'
import {io} from 'socket.io-client'
import Main2 from "./pages/Main2";
import FileSelection from "./pages/FileSelection";
import Connected from "./pages/Connected";
import Authenticated from "./pages/Authenticated"

const App = () => {

    const [val,setVal] = useState(null);
    const [pic,setPic] = useState("");
    const [sock,setSock] = useState(null);
    
    
    
    let navigate = useNavigate();

    useEffect(()=>{
        
        const socket = io('http://localhost:3001')
        setSock(socket)
        console.log(socket);
        socket.on('connect',()=>{
            socket.on('gen',(d)=>{ 
                if(d){
                    if(d=='connected'){
                        setVal(d)
                        navigate('/connected')
                    }
                    else{
                        setVal(d)
                    }
                }
            })
            socket.on('qr',(d)=>{
                setVal(d)
            })
            socket.on('ready',(d,pic)=>{ 
                setVal(d)
                setPic(pic)
                setTimeout(() => {
                    navigate('/connected')
                }, 1000);
            })
        })
    },[])
        

    return(
            <Routes>
                <Route path="/" element={<Main2 val={val} s={sock}/>}/>
                <Route path="/select" element={<FileSelection/>}/>
                <Route path="/authenticated" element={<Authenticated/>}/>
                <Route path="/connected" element={<Connected pic={pic} s={sock}/>}/>
            </Routes>
    )
}
export default App;
