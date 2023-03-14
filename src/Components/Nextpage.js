import React from "react";
import { useNavigate } from "react-router-dom";
function Nextpage(){
             const navigate = useNavigate();
    return(
        <>
        <p>this is apargrgraoh</p>
        <button onClick={()=>navigate("/Centralized")}>centralized</button>
        <button>decentralized</button>
        
        
        </>
    
    )
}
export default Nextpage;