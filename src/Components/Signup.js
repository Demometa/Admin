import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth"
import { firebase } from "./Firebase";
import { useNavigate } from "react-router-dom";
// import logo from './Images/cryptowalletlogo2.png'




import { auth, db } from "./Firebase";
// import { useNavigate } from "react-router-dom";

function Signup() {
  // const [user, loading, error] = useAuthState(auth);
  const [user, loading, error] = useAuthState(auth)
  const todoref = firebase.firestore().collection("newdata")
  const [entername, setentername] = useState("")
  const [enteremail, setenteremail] = useState("")
  const [enterphoneno, setphoneno] = useState("")
  const [password, setpassword] = useState("")
  const navigat = useNavigate()


  function submitthevalue() {
    if (entername == "" && enteremail == "" && enterphoneno == "" && password == "") {
      alert("please fill all field")
    } else {
      localStorage.setItem("getdata", true)
      fetch("https://test24x7metaverse.up.railway.app/api/users", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",

        body: JSON.stringify({
          user_id: auth.currentUser.uid,
          name: entername,
          email: user.email,
          mobile: enterphoneno,
          password: password





        }),
      }).then((res) =>
        alert("submmited"),
        navigat("/Next"),
       

      );
      // .then((data) => {
      //   console.log(data);
      //   setvalue(data);
      // });
    }
  }















  console.log(error);

  const navigate = useNavigate();

  const handleLogout = () => {
    auth.signOut().then(() => {
      console.log('successfully logged out');
      navigate('/');
    }).catch((err) => {
      console.log(err);
    })
  }

  function getthevalue1(event) {
    setentername(event.target.value)

  }
  // function getthevalue2(event){
  //   setenteremail(event.target.value)

  // }
  function getthevalue3(event) {
    setphoneno(event.target.value)

  }
  function getthevalue4(event) {
    setpassword(event.target.value)
  }
  console.log(entername)
  console.log(enteremail)
  console.log(enterphoneno)



  return (



    <div className="loginpage">
    <div className="login">
      <div className="imgdivlogo ">
        {/* <img src={logo} alt="img" className="logoimg" /> */}
        {/* <h4 className='mt-2 mx-2'>Crypto Wallet</h4> */}
      </div>

  
      {loading ? (
        <div className="pt-5 pb-5">Loading...</div>
      ) : (


        <>
          {/* <button className='btn btn-secondary btn-md'
            onClick={handleLogout}>
            LOGOUT
          </button> */}

          <p className="text-center">{user.email}</p>
          {/* <p>{auth.currentUser.uid}</p> */}
        
            <input type="text" className="inputlogin mt-2" placeholder="enter your name" onChange={getthevalue1} />
            {/* <input type="text" placeholder="email" onChange={getthevalue2}/> */}
            <input type="text" className="inputlogin mt-2" placeholder="phone no" onChange={getthevalue3} />
            <input type="text" className="inputlogin mt-2" placeholder="password" onChange={getthevalue4} />
        
         
            <button className="loginbtn mt-3 mb-3" onClick={submitthevalue}>submmit</button>
         
         
        </>


      )}
  

    </div>
    </div>

  )
}
export default Signup;
