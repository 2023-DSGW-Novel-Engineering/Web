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
`;

export const Input = styled.input`
  width: 96%;
  height: 4%;
  font-size: 1rem;
  padding: 3% 2%;
  border: none;
  border-top: 1px solid #d7d7d7;
`;
