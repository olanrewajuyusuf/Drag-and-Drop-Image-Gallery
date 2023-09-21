import React, { useState } from "react";
import { Link } from "react-router-dom";
import Error from "./Error";
import { database } from "../firebase/config";
import { sendPasswordResetEmail } from "firebase/auth";

const ForgetPassword = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    setMessage('');
    setLoading(true);
    setError('');

    sendPasswordResetEmail(database, email).then(data => {
      setMessage("Check your inbox for further instructions")
    }).catch(err => {
      setError('incorrect email format');
    })

    setLoading(false);
  }

  return (
    <div className="w-full h-screen px-5 flex justify-center items-center">
        <div className="mx-auto max-w-md  p-10 text-teal-900 shadow-lg shadow-teal-900/50">
            <h1 className="text-3xl text-center mb-10">Drag & Drop<br/><span className="text-5xl text-rose-700 font-bold underline">Image Gallery</span></h1>
            <h2 className="text-3xl text-center mb-5 font-bold">Reset Password</h2>
            {loading && <h1>Loading...</h1>}
            {error && <Error error={error} />}
            {message && <h3 className="font-bold mb-4 text-center">{message}</h3>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email" className=" text-base">Enter Your Email Address</label>
                    <input
                      className="w-full px-5 py-2 text-base text-lime-950 rounded-md outline-0 my-2 border-2 border-teal-900"
                      type="email" 
                      name="email" 
                      required />
                </div>
                <button type="submit" className="w-full text-base py-3 text-white bg-teal-700 font-bold rounded-md mt-3 hover:shadow-lg hover:shadow-teal-500">Reset Password</button>
            </form>
            <div className="text-center py-5 font-semibold text-base ">
                <Link to='/' className="underline">Log In</Link>
                <p className="mt-3">Need an account? <Link to='/signup' className="underline">Sign Up</Link></p>
            </div>
        </div>
    </div>
  )
}

export default ForgetPassword