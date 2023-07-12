import styled from "styled-components";

export const MainContainer = styled.div`
  width: 80rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SubContainer = styled.div`
  width: 50%;
  height: 70%;
  box-shadow: 0rem 0.5rem 2rem rgba(0, 0, 0, 0.1);
`;
export const ChatHeader = styled.div`
  width: 92%;
  height: 6%;
  padding: 2% 3%;
  display: flex;
  align-items: center;
  font-size: 1.25rem;
  font-weight: 500;
`;

export const ChatContents = styled.div`
  width: 96%;
  height: 77%;
  padding: 2%;
  background-color: #bbbaff;
  overflow: auto;
`;

export const Input = styled.input`
  width: 96%;
  height: 4%;
  font-size: 1rem;
  padding: 3% 2%;
  border: none;
  border-top: 1px solid #d7d7d7;
`;

export const ChatContext = styled.span`
  padding: 0.5rem;
  background-color: white;
  font-size: 1.2rem;
  border-radius: 5px;
  border: 1px solid #d9d9d9;
`;
interface IisMine {
  isMine: boolean;
}
export const ChatContextWrap = styled.div`
  padding: 0.5rem;
  margin: 1rem;
  display: ${(props: IisMine) => (props.isMine ? "flex" : "block")};
  justify-content: ${(props: IisMine) => props.isMine && "flex-end"};
`;
