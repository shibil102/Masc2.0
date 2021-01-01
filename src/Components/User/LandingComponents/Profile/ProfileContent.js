import React from "react";
import Profile from "./Profile";
import classes from "./Profile.module.css";

const ProfileContent = () => {
  return (
    <div className={classes.Profile}>
        <div className={classes.ProfileContent}>
        <div className={classes.Profilecard}>
          <ul className={classes.Profiledetails}>
            <li className={classes.Name}>Name:- <label htmlFor="">Mohamed shibin</label></li>
            <li className={classes.AdmissionNumber}>Admission Number:- <label htmlFor="">9129</label></li>
            <li className={classes.Batch}>Batch:- <label htmlFor="">2019 - 2020</label></li>
            <li className={classes.Course}>Course:- <label htmlFor="">BCA</label></li>
            <li className={classes.Semester}>Semester:- <label htmlFor="">First</label></li>
          </ul>
      </div>

        </div>
    </div>
  );
};

export default ProfileContent;
