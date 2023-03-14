import React, { useState } from "react";
import {useAuthState } from "react-firebase-hooks/auth"
import {firebase} from "./Firebase";
import { useNavigate } from "react-router-dom";




import { auth,db } from "./Firebase";
// import { useNavigate } from "react-router-dom";

function Header(){
    // const [user, loading, error] = useAuthState(auth);
const [user,loading,error]=useAuthState(auth)
const todoref = firebase.firestore().collection("newdata")
const [entername,setentername]=useState("")
const[enteremail,setenteremail]=useState("")
const[enterphoneno,setphoneno]=useState("")
const[password,setpassword]=useState("")
                                const navigat=useNavigate()


function submitthevalue(){
  if(entername== ""&& enteremail==""&&enterphoneno==""&&password==""){
    alert("please fill all field")
  }else{
  fetch("https://test24x7metaverse.up.railway.app/api/users",{
    headers: {
      "Content-Type": "application/json",
    },
     method: "POST",
    
    body: JSON.stringify({
      user_id:auth.currentUser.uid,
      name:entername,
      email:user.email,
      mobile:enterphoneno,
      password:password




      
    }),
  }).then((res) => 
  alert("submmited"),
  navigat("/Next"),
  localStorage.setItem("getdata",true),

  );
  // .then((data) => {
  //   console.log(data);
  //   setvalue(data);
  // });
}
}


  













  
    console.log(error);
  
    const navigate = useNavigate();
  
    const handleLogout=()=>{
      auth.signOut().then(()=>{
        console.log('successfully logged out');
        navigate('/');
        localStorage.removeItem('LogIn');
      }).catch((err)=>{
        console.log(err);
        
      })
    }

    function getthevalue1(event){
      setentername(event.target.value)

    }
    // function getthevalue2(event){
    //   setenteremail(event.target.value)

    // }
    function getthevalue3(event){
      setphoneno(event.target.value)

    }
    function getthevalue4(event){
      setpassword(event.target.value)
    }
    console.log(entername)
    console.log(enteremail)
    console.log(enterphoneno)


  
    return(
        <div className='box'>
      {loading?(
        <div>Loading...</div>
      ):(
        <>
          {user?(
            <>
              <button className='btn btn-secondary btn-md'
                onClick={handleLogout}>
                LOGOUT
              </button>
              
              <p>{user.email}</p>
              <p>{auth.currentUser.uid}</p>
              <div>
                <input type="text" placeholder="enter your name" onChange={getthevalue1}/>
                {/* <input type="text" placeholder="email" onChange={getthevalue2}/> */}
                <input type="text" placeholder="phone no" onChange={getthevalue3}/>
                <input type="text" placeholder="password" onChange={getthevalue4}/>
              </div>
              <div>
                <button onClick={submitthevalue}>submmit</button>
              </div>
              <div className='photo'>
                
              </div>
              
            </>
          ):(
            <button className='btn btn-primary btn-md'
              onClick={()=>navigate('/login')}>
              LOGIN
            </button>
          )}
        </>
      )}
    </div>

    )
}
export default  Header;