import { Link } from "react-router-dom";
import { useState } from "react";

function getUser(){
    let user=localStorage.getItem('user');
    if(user){
      user=JSON.parse(user);
    }
    else{
      user=null;
    }
    return user;
  }
const User=()=>{

     const [user,setUser]=useState(getUser());
      console.log(user.lastName)
      return(
        <>
        {user?(
        <>
        <h4>Hello,{user.firstName} {user.lastName}</h4>
        <h5>email:{user.email}</h5>
        </>
      ):
      (<Link to={'/login'} className="btn btn-primry">LOGIN</Link>)
      }
        </>
      )
}
export default User;