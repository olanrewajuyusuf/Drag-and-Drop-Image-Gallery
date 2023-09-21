import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Error from "./Error";
import { database } from "../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    setLoading(true);
    setError('');

    createUserWithEmailAndPassword(database, email, password).then(data => {
      console.log(data, 'authData');
      navigate('/');
    }).catch(err => {
      setError('Failed to create an account');
    })

    setLoading(false);
  }

    return (
      <div className="w-full h-screen px-5 flex justify-center items-center">
          <div className="mx-auto max-w-md  p-10 text-teal-900 shadow-lg shadow-teal-900/50">
              <h1 className="text-3xl text-center mb-10">Drag & Drop<br/><span className="text-5xl text-rose-700 font-bold underline">Image Gallery</span></h1>
              <h2 className="text-3xl text-center mb-5 font-bold">SIgn Up Form</h2>
              {loading && <h1>Loading...</h1>}
              {error && <Error error={error}/>}
              <form onSubmit={handleSubmit}>
                  <div>
                      <label htmlFor="email" className=" text-base">Enter Your Email Address</label>
                      <input
                        className="w-full px-5 py-2 text-base text-lime-950 rounded-md outline-0 my-2 border-2 border-teal-900"
                        type="email" 
                        name="email" 
                        required />
                  </div>
                  <div>
                      <label htmlFor="password" className=" text-base">Enter Your Password</label>
                      <input
                        className="w-full px-5 py-2 text-base text-lime-950 rounded-md outline-0 my-2 border-2 border-teal-900"
                        type="password" 
                        name="password" 
                        required />
                  </div>
                  <button type="submit" className="w-full text-base py-3 text-white bg-teal-700 font-bold rounded-md mt-3 hover:shadow-lg hover:shadow-teal-500">Sign Up</button>
              </form>
              <div className="text-center py-5 font-semibold text-base ">
                  <p className="mt-3">Already have an account? <Link to='/' className="underline">Log In</Link></p>
              </div>
          </div>
      </div>
    )
  }
  
  export default SignUp