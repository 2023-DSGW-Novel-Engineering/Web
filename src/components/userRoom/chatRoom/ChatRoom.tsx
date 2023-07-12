import React, { KeyboardEvent, useEffect, useState } from "react";
import io from "socket.io-client";

const ChatRoom = () => {
  const [newChat, setNewChat] = useState<string>("");
  // const socket = io("http://서버주소:포트번호");
  // useEffect(() => {
  //   socket.on("message", (data) => {
  //     console.log("메시지 수신:", data);
  //   });
  //   return () => {
  //     socket.disconnect();
  //   };
  // }, []);
  const sendMessage = (message: string) => {
    // socket.emit("chatMessage", message);
  };
  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      sendMessage(newChat);
    }
  };
  return (
    <div>
      <div></div>
      <input
        type="text"
        placeholder="메세지를 입력해주세요."
        value={newChat}
        onChange={(e) => setNewChat(e.target.value)}
        onKeyDown={handleKeyPress}
      />
    </div>
  );
};

export default ChatRoom;
