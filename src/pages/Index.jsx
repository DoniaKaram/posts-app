import { useEffect, useCallback, useState } from "react";
import PostList from "../components/PostList";
import { fetchPosts, deletePost } from "../state/postSlice";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading";
import SignIn from "./signin";
import { Link } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";

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
const Index = () => {
  const dispatch = useDispatch();
  const { records, loading, error } = useSelector((state) => state.posts);

  const { isLoggedIn } = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const deleteRecord = useCallback(
    (id) => dispatch(deletePost(id)),
    [dispatch]
  );
  const [user,setUser]=useState(getUser());
  return (
    <>
    
     
     
       {user?(
       <>
       <h4>Hello,{user.firstName} {user.lastName}</h4>
       <h5>email:{user.email}</h5>
       </>
     ):
     (<Link to={'/login'} className="btn btn-primry">LOGIN</Link>)
     }
       
     
      
        <Loading loading={loading} error={error}>
          <PostList data={records} deleteRecord={deleteRecord} />
        </Loading>
      
    
    </>
  );
};

export default Index;
