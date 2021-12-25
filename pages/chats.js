import React, { useState, useEffect, useContext } from "react";

import { Context } from "../context";

import dynamic from "next/dynamic";
import { useRouter } from "next/router";

const ChatEngine = dynamic(() =>
  import("react-chat-engine").then((module) => module.ChatEngine)
);
const MessageFormSocial = dynamic(() =>
  import("react-chat-engine").then((module) => module.MessageFormSocial)
);


export default function Chats() {
  const { username, secret } = useContext(Context);
  const [showChat, setShowChat] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    router.push("/");
}

  useEffect(() => {
    if (typeof document !== undefined) {
      setShowChat(true);
    }
  }, []);

  useEffect(() => {
    if (username === "" || secret === "") {
      router.push("/");
    }
  }, [username, secret]);

  if (!showChat) return <div />;


  return (
    <div className="background">

<div className='chats-page'>
            <div className='nav-bar'>
                <div className='logo-tab'>
                     Talk-ShiT <br/> <a>An Evolution of Conversations</a>
                </div>
                <div onClick={handleLogout} className='logout-tab'>
                    Logout
                </div>
            </div>

      <div className="shadow">
        <ChatEngine
          height="calc(100vh - 50px)"
          projectID="4d27b37d-14b8-468f-b0b8-a93ff9db1304"
          userName={username}
          userSecret={secret}
          renderNewMessageForm={() => <MessageFormSocial />}
        />
      </div>
    </div>
    </div>
  );
}
