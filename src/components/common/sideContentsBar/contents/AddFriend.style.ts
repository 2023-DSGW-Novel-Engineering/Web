import styled from "styled-components";

export const EntrieComponents = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(230, 230, 230, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AddFriendContainer = styled.div`
  background-color: white;
  width: 40%;
  height: 40%;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InputAddFriends = styled.input`
  width: 16rem;
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid black;
`;

export const TitleAddFriends = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 1rem;
`;
export const AddFriendBtn = styled.button`
  margin-left: 1rem;
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid black;
`;
