import React, { useEffect, useState } from "react";
import * as S from "./AddFriend.style";
import ConnectPapago from "../../../../util/ConnectPapago";
import AddIcon from "../../../../asset/Add.svg";

const AddFriend = () => {
  const [addFriend, setAddFriend] = useState<boolean>(false);
  const [placeholder, setPlaceholder] = useState<string>("");

  useEffect(() => {
    ConnectPapago(setPlaceholder, "친구의 아이디를 입력해주세요.");
  }, []);
  return (
    <>
      {addFriend && (
        <S.EntrieComponents>
          <S.AddFriendContainer>
            <div>
              <S.TitleAddFriends>친구 추가{"(Add Friends)"}</S.TitleAddFriends>
              <S.InputAddFriends type="text" placeholder={placeholder} />
              <S.AddFriendBtn>친구추가</S.AddFriendBtn>
            </div>
          </S.AddFriendContainer>
          <S.BackgroundComponents
            onClick={() => setAddFriend(false)}
          ></S.BackgroundComponents>
        </S.EntrieComponents>
      )}
      <S.AddIcon url={AddIcon} onClick={() => setAddFriend(true)} />
    </>
  );
};

export default AddFriend;
