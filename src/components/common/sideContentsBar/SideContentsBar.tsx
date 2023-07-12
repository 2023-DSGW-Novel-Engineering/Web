import React from "react";
import * as S from "./SideContentsbar.style";
import ContentsBox from "./contents/ContentsBox";
import AddFriend from "./contents/AddFriend";

interface ISideContentS {
  title: string;
  contents?: string[];
  url: string;
}

const SideContentsBar = (props: ISideContentS) => {
  return (
    <div>
      <S.Title>
        <S.TitleContext>
          {props.title}
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
