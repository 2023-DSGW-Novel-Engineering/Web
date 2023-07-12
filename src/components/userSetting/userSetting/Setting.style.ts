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
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UserContentsWrap = styled.div`
  width: 50%;
`;

export const UserProfile = styled.nav`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background-color: gray;
`;

export const UserInfoWrap = styled.div`
  display: flex;
  align-items: center;
  width: 100;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

export const UserTextWrap = styled.div`
  display: flex;
  align-items: center;
  width: 100;
  justify-content: space-around;
  margin-bottom: 2rem;
`;

export const UserInfoName = styled.p`
  font-size: 1.75rem;
  font-wegiht: 500;
`;

export const UserInfoTitle = styled.p`
  font-size: 1.5rem;
  font-wegiht: 500;
`;

export const UserInfoContext = styled.p`
  font-size: 1rem;
`;
