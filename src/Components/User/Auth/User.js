import React, {useEffect} from "react";
import UserAuth from "./UserAuth";
import Landing from '../Landing'
import Profile from '../LandingComponents/Profile/Profile'
import About from '../LandingComponents/About/About'
import { BrowserRouter as Router, Route,useHistory } from "react-router-dom";

const User = () => {
  const history=useHistory()
  useEffect(() => {
  const User = 
  JSON.parse(localStorage.getItem('user_majlis'));
  if(User) {
   console.log(User);
  }else{
  // history.push('/Auth')  
  }
  }, [])
  return (
    <Router>
      <Route path="/Auth">
        <UserAuth />
      </Route>
      <Route path="/About">
        <About/>
      </Route>
      <Route path="/Profile">
        <Profile/>
      </Route>
      <Route exact path="/">
        <Landing/>
      </Route>
    </Router>
  );
};

export default User;
