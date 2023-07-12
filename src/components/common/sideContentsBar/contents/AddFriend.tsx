import React, { useEffect, useState } from "react";
import * as S from "./AddFriend.style";
import axios from "axios";
import ConnectPapago from "../../../../util/ConnectPapago";

const url = "http://localhost:8080/translate";
const AddFriend = () => {
  //   const [addFriend, setAddFriend] = useState<boolean>(false);
  const [placeholder, setPlaceholder] = useState<string>("");

  useEffect(() => {
    ConnectPapago(setPlaceholder, "친구의 아이디를 입력해주세요.");
  }, []);
  return (
    <>
      <S.EntrieComponents>
        <S.AddFriendContainer>
          <div>
            <S.TitleAddFriends>친구 추가{"(Add Friends)"}</S.TitleAddFriends>
            <S.InputAddFriends type="text" placeholder={placeholder} />
            <S.AddFriendBtn>친구추가</S.AddFriendBtn>
          </div>
        </S.AddFriendContainer>
      </S.EntrieComponents>
      {/* <S.MainContainer onClick={() => setAddFriend(true)}> */}
      {/* 친구 추가 */}
      {/* </S.MainContainer> */}
    </>
  );
};

export default AddFriend;
