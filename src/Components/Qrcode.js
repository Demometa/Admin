import React from "react";
import { useLocation } from "react-router-dom";
import QRCode from "react-qr-code";
function Qrcode(){
    

    const location = useLocation()
    const value = location.state.coinaddress;
    
    console.log(location.state)
    return(
        <>
        <p>Wallet</p>
        <p>{location.state.coinaddress} -Coin Address Id</p>
        <p>{location.state.coinsid} -Coin Id Public</p>
        {/* <p>{location.state.publicaddress1}-public address</p> */}
        <div style={{ height: "auto", margin: "0 auto", maxWidth: 64, width: "100%" }}>
    <QRCode
    size={256}
    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
    value="hii"
    viewBox={`0 0 256 256`}
    />
</div>
        </>


    )
}
export default Qrcode