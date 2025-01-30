import { Link } from "react-router-dom";
import styled from "styled-components";

const bgColor = "linear-gradient(45deg,#5d626e, #282A36)";
const textColor = "#fff";
const hoverColor = "#6d727e";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  background: ${bgColor};
  color: ${textColor};
  padding: 0 2rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  margin-bottom: 2rem;
  border-bottom: none;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${textColor};
  font-size: 1.2rem;
  margin: 0 1rem;
  transition: color 0.3s, border-bottom 0.3s;
  border-bottom: 2px solid transparent;

  &:hover {
    color: ${hoverColor};
    border-bottom: 2px solid ${hoverColor};
  }
`;

export const LogoutImage = styled.img`
  width: 22px;
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.2);
  }
`;