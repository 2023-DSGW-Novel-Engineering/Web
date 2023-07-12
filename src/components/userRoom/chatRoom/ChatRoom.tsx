import React, { KeyboardEvent, useEffect, useRef, useState } from "react";
import * as S from "./ChatRoom.style";
import { useParams } from "react-router-dom";
import ConnectPapago from "../../../util/ConnectPapagoNoSetState";
import ConnectGoValue from "../../../util/ConnectOnlyValue";
import axios from "axios";
import { debounce } from "lodash";

// let socket1 = new WebSocket(
//   `ws://192.168.191.47:4000/socket/?name=${localStorage.getItem("Name")}`
// );
const url = "http://localhost:8080/translate";

let socket = new WebSocket(`ws://192.168.191.47:4000/ws`);
interface IChatValue {
  chat: string;
  isMine: boolean;
}

const ChatRoom = () => {
  const [newChat, setNewChat] = useState<string>("");
  const [beforeChat, setBeforeChat] = useState<string>("");
  const [chat, setChat] = useState<IChatValue[]>([]);

  socket.onopen = function () {
    console.log("Connected to WebSocket server");
  };

  socket.onmessage = function (event) {
    let message = event.data;
    console.log("dddd", message);
    let copy: IChatValue[] = [...chat];
    copy.push({ chat: message, isMine: beforeChat === message });
    copy.map((e) => {
      ConnectPapago(e, beforeChat, chat, setChat);
    });
  };

  socket.onclose = function (event) {
    console.log("Disconnected from WebSocket server");
  };

  const Onclick = () => {
    axios
      .post(url, {
        text: newChat,
        language: localStorage.getItem("Native_language")?.substr(0, 2),
      })
      .then((e) => {
        socket.send(`${e.data.translateLanguage}`);
        console.log("df", e.data.translateLanguage);
        setBeforeChat(newChat);
        setNewChat("");
      })
      .catch((_) => {});
  };

  const handleKeyPress = debounce((e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      scrollToBottom();
      Onclick();
    }
  }, 300);
  const { roomidx } = useParams();
  const scrollRef = useRef<null | HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScroll = (event: any) => {
    const { scrollTop, scrollHeight, clientHeight } = event.target;

    if (scrollTop === 0) {
      console.log("Scroll to top");
      // 스크롤이 위로 올라갈 때 필요한 로직을 여기에 추가
    }

    if (scrollTop + clientHeight === scrollHeight) {
      console.log("Scroll to bottom");
      scrollToBottom();
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [chat]);

  return (
    <S.MainContainer>
      <S.SubContainer>
        <S.ChatHeader>
          <p>{roomidx}</p>
        </S.ChatHeader>
        <S.ChatContents ref={scrollRef} onScroll={handleScroll}>
          {chat.map((e, i) => (
            <S.ChatContextWrap
              isMine={e.isMine}
              key={i}
              onClick={() => console.log(e)}
            >
              <S.ChatContext>{e.chat}</S.ChatContext>
            </S.ChatContextWrap>
          ))}
        </S.ChatContents>
        <S.Input
          type="text"
          placeholder={"메세지를 입력해주세요."}
          value={newChat}
          onChange={(e) => setNewChat(e.target.value)}
          onKeyDown={handleKeyPress}
        />
      </S.SubContainer>
    </S.MainContainer>
  );
};

export default ChatRoom;
