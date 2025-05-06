//import { useEffect } from "react";
import { useSelector } from "react-redux";
//import { useNavigate } from "react-router-dom";

const WithGuard = ({children}) => {

    //const navigate=useNavigate();
    const {isLoggedIn}=useSelector(state=>state.auth)
    /*useEffect(()=>{
       if(!isLoggedIn){
        navigate('/')
       }
    },[isLoggedIn,navigate])*/
  return isLoggedIn?children:<div>please log in first!</div>;
};

export default WithGuard;