import React , {useState}from "react";
import {useForm} from 'react-hook-form';// npm install react-hook-form
import {Link} from 'react-router-dom'; // npm install ract-router-dom

function Login(props) {
  const {register,handleSubmit}=useForm() //its a hook for forms in react
 
//this is function for geting the data from the form
  const onSubmit=(data)=>{ 
    console.log(data);
    props.di(data) //usestate is define in App.js ( one way data-flow )
  }

  return (
    <div >
        <h1>Login Page</h1>
            <div className="">
                <form >
                    <div className="row">
                        <div className="column">
                            <div className="card">   
                                <label>Enter User ID</label><br/>
                                <input type="text" placeholder="Enter Email" name="name" {...register("name",{required:true})}/><br/><br/>

                                <label>Enter Your Password</label><br/>
                                <input type="password" placeholder="Enter Password" {...register("passwoad",{required: true})}/><br/><br/>

                                <button type="submit" onClick={handleSubmit(onSubmit)}> <Link to="/OnlineExam"> Submit </Link></button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
    </div>
  );
}

export default Login;