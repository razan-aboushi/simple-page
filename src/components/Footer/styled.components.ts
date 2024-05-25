import styled from "styled-components";

export const FooterContainer = styled.footer`
  background: #fff;
  color: #333;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 1rem 1rem;
  text-align: center;
  @media (min-width: 768px) {
    text-align: right; 
  }
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

export const FooterSection = styled.div`
  margin: 1rem 0;

  h4 {
    margin-bottom: 1rem;
    font-size: 1.2rem;
    text-transform: uppercase;
  }
`;

export const FooterLink = styled.a`
  color: #333;
  text-decoration: none;
  margin: 0.5rem 0;
  display: block;

  &:hover {
    text-decoration: underline;
  }
`;

export const CopyRight = styled.div`
  margin-top: 2rem;
  font-size: 0.9rem;
  text-align: center;
  @media (min-width: 768px) {
    margin-top: 0;
  }
`;
