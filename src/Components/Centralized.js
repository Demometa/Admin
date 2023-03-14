import react, { useState,useEffect } from "react";
import "./Centralized.css"
import {useAuthState } from "react-firebase-hooks/auth"
import {auth, firebase} from "./Firebase";
import { useNavigate } from "react-router-dom";

function Centralized(){
const[value,setvalue]=useState([])
const[limits,setlimits]=useState(false)
const[coin_id,setcoin_id]=useState([])
const[coin_address,setcoin_address]=useState([])

const navigate = useNavigate()

                          
    useEffect(()=>{
        fetch("https://test24x7metaverse.up.railway.app/api/coins",{
            method:"GET",
            headers:{
                accept:"application/json"
            }
        }).then((res)=>res.json())
        .then((data)=>{console.log(data.message);
            setvalue(data)
        })

    },[])

    useEffect(()=>{
        fetch("https://test24x7metaverse.up.railway.app/api/coins/coins_address",{
            method:"GET",
            headers:{
                accept:"application/json"
            }
        }).then((res)=>res.json())
        .then((data)=>{console.log(data);
            setcoin_id(gettheallthevalue(data))

        })
        
    },[])

    console.log("value",value)
    function gettheallthevalue(res) {
        const arr2 = res.map(function (caaavalue, id) {
            return caaavalue.coin_id;
        })
        // setmakearr(arr2);
        const arr3 = arr2.filter(function (caaavalue, index) {
            return arr2.indexOf(caaavalue) === index
        })
        // setmainarr(arr3);
        return arr3;

    }
    console.log("coin_id",coin_id)

    function  getthenewwalletvalue(res){
        if(res == undefined){
            alert("no user id found")
        }else{
            setlimits(true)
        fetch(`https://test24x7metaverse.up.railway.app/api/coins/coins_address/${res}`,{
            method:"GET",
            headers:{
                accept:"application/json"
            }

        }).then((res)=>res.json())
        .then((data)=>{console.log(data);
            setcoin_address(data)
        })


        }
       

    }
    function changetheuserid(coin_addressId,coinId,public_address){
        console.log(coin_addressId,coinId)
        fetch(`https://test24x7metaverse.up.railway.app/
api/coins/coins_address/${coinId}/${auth.currentUser.uid}/${coin_addressId}`,{
            method:"PUT",
            headers:{
                "content-type":"application/json"
            }
            
        }).then(res=>res.json())
        .then((res)=>{alert(res.message);
            navigate("/qrcode",{state:{"coinaddress":public_address,
                "coinsid":coinId,
                "names":"hiiii"
        
               
            }})
        })
    //     {
    //     console.log(data.json)
    //     alert("submitted")
    //     navigate("/qrcode",{state:{"coinaddress":public_address,
    //     "coinsid":coinId,
    //     "names":"hiiii"

       
    // }})
        // })

    }
    function addwallet(coin_id){
        fetch(`https://test24x7metaverse.up.railway.app/
api/coin/user/wallet/${coin_id}/${auth.currentUser.uid}`,{
            method:"POST",
            headers:{
                "content-type":"application/json"
            }

        }).then(res=>res.json())
        .then((res)=>alert(res.message))
    }
  

    return(
        <>
      {limits == false?(  <div>
        <p>this is a paragraph</p>
        <table class="table table-striped table-dark">
        <thead>
          <tr>
           
            <th scope="col">Logo</th>
            <th scope="col">Coin Name</th>
            <th scope="col">Currency</th>
            <th scope="col">wallet</th>
            
            
          </tr>
        </thead>
        <tbody>
            {value.map(function(caaavalue,index){
                return(
                    <tr>
                    <td><img src={caaavalue.logo} id="image"/></td>
                    <td>{caaavalue.coin_name}</td>
                    <td>{caaavalue.currency}</td>
                  <td><button class="btn btn-primary" onClick={()=>{
                    // setlimits(true);
                    getthenewwalletvalue(coin_id[index])}}> wallet generate</button></td>
                    
                    </tr>

                )
            })}
           
        </tbody>
      </table>
      </div>):(
        <>
      <div>this is a paragraph</div>
      <div><p>{auth.currentUser.uid}</p></div>
      <div>
      <table class="table table-striped table-dark">
        <thead>
          <tr>
           
            <th scope="col">Public address</th>
            <th scope="col">private address</th>
            <th scope="col">add</th>
            
            
            
          </tr>
        </thead>
        <tbody>
           { coin_address.map(function(caaavalue){
                return(
                    <tr>
                    {/* <td><img src={caaavalue.logo} id="image"/></td> */}
                    <td>{caaavalue.public_address}</td>
                    <td>{caaavalue.private_address}</td>
                    <td><button class="btn btn-primary" onClick={()=>{changetheuserid(caaavalue._id,caaavalue.coin_id,caaavalue.public_address);addwallet(caaavalue.coin_id)}}>add</button></td>
                    
                    </tr>

                )
            })}
                          
                   

           
        </tbody>
      </table>


      </div>
      </>
      )}
        </>
        




    )
}
export default Centralized;