import React, { KeyboardEvent, useState } from "react";
import * as S from "./ChatRoom.style";
import { useParams } from "react-router-dom";
let socket = new WebSocket("ws://192.168.191.47:4000/ws");

const ChatRoom = () => {
  const [newChat, setNewChat] = useState<string>("");
  const [chat, setChat] = useState<string[]>([]);

  socket.onopen = function () {
    console.log("Connected to WebSocket server");
  };

  socket.onmessage = function (event) {
    let message = event.data;
    console.log(message);
    let copy: string[] = [...chat];
    copy.push(message);
    setChat([...copy]);
  };

  socket.onclose = function (event) {
    console.log("Disconnected from WebSocket server");
  };

  const Onclick = () => {
    let message = newChat;
    socket.send(message);
    setNewChat("");
  };
  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      Onclick();
    }
  };
  const { roomidx } = useParams();
  return (
    <S.MainContainer>
      <S.SubContainer>
        <S.ChatHeader>
          <p>{roomidx}</p>
        </S.ChatHeader>
        <S.ChatContents>
          {chat.map((e) => (
            <div>{e}</div>
          ))}
        </S.ChatContents>
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
