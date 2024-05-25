import styled from "styled-components";

export const NavBarContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 1rem 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Logo = styled.div`
  img {
    border-radius: 15px;
    cursor: pointer;
  }
`;

export const NavLinks = styled.nav`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    align-items: flex-start;
  }
`;

export const NavLink = styled.a`
  color: black;
  text-decoration: none;
  font-size: 1.1rem;
  position: relative;
  padding: 10px;

  &:hover {
    color: #021a2a;
  }

  &:hover::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #ddd;
    bottom: -4px;
    left: 0;
  }
`;
