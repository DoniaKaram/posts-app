import {useEffect,useCallback, useState} from "react";
import PostList from "../components/PostList";
import {fetchPosts,deletePost} from '../state/postSlice'
import { useDispatch,useSelector } from "react-redux";
import Loading from "../components/Loading";
import User from "../components/User";


const Index = () => {
  
  const dispatch=useDispatch();
  const {records,loading,error}=useSelector((state)=>state.posts)
  const { isLoggedIn } = useSelector((state) => state.auth);
  useEffect(()=>{
     dispatch(fetchPosts())
  },[dispatch]);

  const deleteRecord=useCallback((id)=>dispatch(deletePost(id)),[dispatch]);
  return <Loading loading={loading} error={error}>
    <PostList data={records} deleteRecord={deleteRecord} />
  </Loading>;
};

export default Index;