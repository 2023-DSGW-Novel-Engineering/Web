import React, { KeyboardEvent, useState } from "react";
// import io from "socket.io-client";
import * as S from "./ChatRoom.style";
import { useParams } from "react-router-dom";

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
  // const sendMessage = (message: string) => {
  // socket.emit("chatMessage", message);
  // };
  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      // sendMessage(newChat);
    }
  };
  const { roomidx } = useParams();
  return (
    <S.MainContainer>
      <S.SubContainer>
        <S.ChatHeader>
          <p>{roomidx}</p>
        </S.ChatHeader>
        <S.ChatContents></S.ChatContents>
        <S.Input
          type="text"
          placeholder="메세지를 입력해주세요."
          value={newChat}
          onChange={(e) => setNewChat(e.target.value)}
          onKeyDown={handleKeyPress}
        />
      </S.SubContainer>
    </S.MainContainer>
  );
};

export default ChatRoom;
