import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
function Protected(props){
    let { Component } = props
    const navigate=useNavigate()
        useEffect(()=>{
            let login = localStorage.getItem("LogIn")
            let getdata = localStorage.getItem("getdata")
            if(!login){
                navigate('/')
    
            }else if(!getdata){
                navigate('/')
            }
           
            
            
        })
    return(
        
        <Component></Component>

    )
}
export default Protected;