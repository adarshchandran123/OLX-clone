import React, { useState,useContext } from 'react';

import Logo from '../../olx-logo.png';
import { FirebaseContext } from '../../store/Context';
import {useHistory,Link} from 'react-router-dom'
import './Signup.css';

export default function Signup() {

  const history = useHistory()

  const [userName, setuserName] = useState('');
  const [email, setemail] = useState('');
  const [phone, setphone] = useState('');
  const [password, setpassword] = useState('');

  const {firebase} = useContext(FirebaseContext)
  
  const handleSignupSubmit = (e)=>{
    e.preventDefault()
    console.log('nokkam',firebase);
    firebase.auth().createUserWithEmailAndPassword(email,password).then((result)=>{
      console.log('result vanno',result);
        result.user.updateProfile({displayName:userName}).then(()=>{
          firebase.firestore().collection('users').add({
            id:result.user.uid,
            userName:userName,
            phone:phone
          }).then(()=>{
            history.push("/login")
          })
        })


    }).catch((err)=>{
      console.log('error aanu',err)
    })
  }

  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSignupSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            value={userName}
            onChange={(e)=>setuserName(e.target.value)}
            name="name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            value={email}
            onChange={(e)=>setemail(e.target.value)}
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            value={phone}
            onChange={(e)=>setphone(e.target.value)}
            name="phone"
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            value={password}
            onChange={(e)=>setpassword(e.target.value)}
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a>{<Link to="/login">Login</Link>}</a>
      </div>
    </div>
  );
}
