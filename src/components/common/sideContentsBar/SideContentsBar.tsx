import React, { useEffect, useState } from "react";
import * as S from "./SideContentsbar.style";
import ContentsBox from "./contents/ContentsBox";
import AddFriend from "./contents/AddFriend";
import ConnectPapago from "../../../util/ConnectPapago";

interface ISideContentS {
  title: string;
  contents?: string[];
  url: string;
}

const SideContentsBar = (props: ISideContentS) => {
  const [titleValue, setTitleValue] = useState<string>("");
  useEffect(() => {
    ConnectPapago(setTitleValue, props.title);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <S.Title>
        <S.TitleContext>
          {titleValue}
          {props.title === "친구" && <AddFriend />}
        </S.TitleContext>
      </S.Title>
      <S.SidebarContainer>
        <S.SidebarContentsContainer>
          {props.contents?.map((e, i) => (
            <ContentsBox context={e} url={props.url} key={i} />
          ))}
        </S.SidebarContentsContainer>
      </S.SidebarContainer>
    </div>
  );
};

export default SideContentsBar;
