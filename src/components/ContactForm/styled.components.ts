import styled from "styled-components";

export const ContactFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 72%;
  height: 100%;
  padding: 30px;
  margin: 20px auto;
  border: none;
  border-radius: 15px;
  background: linear-gradient(135deg, #f0f0f0, #ffffff);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }

  h2 {
    text-align: center;
  }

  label {
    text-align: right;
    font-weight: bold;
    padding: 8px 0;
    font-size: 18px;
    color: #333;
  }

  textarea, input {
    padding: 16px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 8px;
    width: 100%;
    box-sizing: border-box;
    text-align: right;
    font-size: 1rem;
    background: #fafafa;
    transition: border-color 0.3s ease-in-out;

    &:focus {
      border-color: #6200ea;
      outline: none;
      box-shadow: 0 0 5px rgba(98, 0, 234, 0.5);
    }
  }

  button {
    padding: 14px;
    background-color: #6200ea;
    color: #fff;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    width: 100%;
    border: none;
    border-radius: 8px;
    transition: background-color 0.3s, box-shadow 0.3s;
    margin-top: 15px;

    &:hover {
      background-color: #3700b3;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    }
  }
`;
