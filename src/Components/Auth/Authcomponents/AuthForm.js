import React from "react";
import { useFormik } from "formik";
import classes from "../../../App.module.css";

const AuthForm = () => {
  const formik = useFormik({
    initialValues: {
      admissionNumber: "",
      name: ""
    },
    onSubmit: values => {
console.log('form submission' ,values)
    },
    validate: values => {
let errors = {}

if(!values.admissionNumber){
  errors.admissionNumber = 'Admission Number required'
}

if(!values.name){
  errors.name = 'Name required'
}else if(/[0-9~@#$^*()_+=[\]{}|\\,.?:<>'"/;`%]/.test(values.name)){
  formik.values.name = ""
  errors.name = 'invalid Name format'
}

return errors
    },
    
  
  });
  console.log(formik.values)
  return (
    <div className={classes.AuthSection}>
      <form onSubmit={formik.handleSubmit} action="Post" className={classes.AuthForm}>
        <input
          id="admissionNumber"
          type="number"
          name="admissionNumber"
          placeholder={formik.errors.admissionNumber  ? formik.errors.admissionNumber : "Admission number" }
          className={formik.errors.admissionNumber  ? classes.errorMessage : `${classes.Input_admission} ${classes.Input}`}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.admissionNumber}
          
        />
        <input
          id="name"
          type="text"
          name="name"
          placeholder={formik.errors.name  ? formik.errors.name : 'Name'}
          className={formik.errors.name  ? classes.errorMessage : `${classes.Input_name} ${classes.Input}`}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
 
        <input className={classes.Submit} type="submit" />
      </form>
    </div>
  );
};

export default AuthForm;
