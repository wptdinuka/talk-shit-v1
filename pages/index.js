import React, { useContext }  from "react";

import { Context } from "../context";

import { useRouter } from "next/router";

import axios from "axios";


export default function Auth() {

  const { username, setUsername, secret, setSecret } = useContext(Context);

  const router = useRouter();

  function onSubmit(e) {
    e.preventDefault();

    if (username.length === 1 || secret.length === 1) return;

    axios
      .put(
        "https://api.chatengine.io/users/",
        { username, secret },
        { headers: { "Private-Key": "bcbbc097-d42b-4b03-b40f-b2bea28941f8" } }
      )

      .then((r) => {
        router.push("/chats");
      });
  }

  return (
    <div className="login-background">
      <video 
      src="/a.mp4"  
      autoPlay
      muted={true}  
      loop={true}
      id="myVideo" ></video>
      <div className="auth-container">
        <form className="auth-form" onSubmit={(e) => onSubmit(e)}>
          <div className="auth-title">Welcome to <br/> Talk-ShiT</div>

          <div className="input-container">
            <input
              placeholder="Username"
              className="text-input"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="input-container">
            <input
              type="password"
              placeholder="Password"
              className="text-input"
              onChange={(e) => setSecret(e.target.value)}
            />
          </div>

          <button type="submit" className="submit-button">
            Login / Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
