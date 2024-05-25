import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const BigContainerYellow = styled.div`
  border: 1px solid gray;
  border-radius: 8px;
  width: 35%;
  height: 50%;
  padding: 10px;
  margin: 20px;
  direction: rtl;
  box-shadow: 1px 1px 10px;
  animation: ${fadeIn} 0.5s ease-in-out forwards; 

  button {
    width: 100%;
    margin-top: 10px;
    border: 1px solid white;
    border-radius: 5px;
    padding: 14px;
    background-color: #c9c900;
    color: white;
    font-weight: bold;
    font-size: 15px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #eed35a;
  }

  @media (max-width: 768px) {
    width: 90%;
    height: auto;
    margin: 10px;
    padding: 5px;
  }
`;

export const WidgetYellowContainer = styled.div`
  display: flex;
  justify-content: space-between;

  div > .title {
    margin: 8px;
  }

  div > .ul-list {
    list-style-type: arabic-indic;
  }

  .imageStyle {
    border-radius: 10px;
  }

  ul > li {
    line-height : 1.8rem;
    text-align: right;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;

    div > .title {
      margin: 10px;
      font-size: 1.2rem;
      text-align: right;
    }

    .imageStyle {
      width: 97%;
      height: auto;
      margin-top: 10px;
    }
  }
`;
