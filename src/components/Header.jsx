import React from "react";
import { NavLink } from "react-router-dom";
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
function handleLogout(){
  localStorage.clear();

}
const Header = () => {
  const [user,setUser]=useState(getUser());

  return (
    <div className="header">
      <h1>POSTS APP</h1>
      <ul className="nav">
        <li>
          <NavLink to="/" end>Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="post/add">Add Post</NavLink>
        </li>
        <li>
          <NavLink to="posts">Posts</NavLink>
        </li>
        
      </ul>
    </div>
  );
};

export default Header;
