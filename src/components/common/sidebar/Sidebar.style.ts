import styled from "styled-components";

interface IIconProps {
  Img: string;
}

export const MainSidebarContainer = styled.div`
  padding: 1.5rem;
  width: 2rem;
  height: 100%;
`;

export const Icon = styled.div`
  width: 2rem;
  height: 2rem;
  margin-bottom: 3rem;
  background-image: url(${(props: IIconProps) => props.Img});
  background-size: cover;
`;
