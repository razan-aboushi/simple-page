import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const MainContentContainer = styled.div`
  display: flex;
  flex-direction: column-reverse; 
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  width: 100%;
  max-width: 1200px;
  margin: 20px;
  padding: 15px;
  text-align: right;

  img {
    width: 100%;
    height: auto;
    max-width: 400px;
  }

  div {
    width: 100%;
  }

  div > a {
    text-decoration: none;
    font-weight: bold;
    margin-top: 15px;
  }

  div > a:hover {
    color: #cb0101;
    cursor: pointer;
  }

  div > p {
    line-height: 1.8rem;
  }

  @media(min-width: 768px) {
    flex-direction: row;
    div {
      width: 50%;
    }
  }

  @media(min-width: 1200px) {
    width: 50%;
    height: 50%;
  }
`;
