import styled from "styled-components";

export const RegisterContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 4fr 3fr;
  position: relative;
`;
export const BarraLateral = styled.aside`
  height: 100%;
  background: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);
  padding: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  h2 {
    font-size: 40px;
    font-weight: 800;
    line-height: 42px;
    margin-top: 64px;
  }
  p {
    line-height: 28px;
    margin-top: 24px;
  }
  footer {
    display: flex;
    flex-direction: column;

    line-height: 24px;
    strong {
      font-weight: 800;
    }
  }
`;
export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  background: #fff;
  width: 100%;
  fieldset {
    border: 0;
    text-align: left;
    width: 70%;
    max-width: 400px;
  }
  legend {
    width: 100%;
    font-size: 32px;
    line-height: 34px;
    color: #5c8599;
    font-weight: 700;
    padding-bottom: 24px;
  }

  + fieldset {
    margin-top: 80px;
  }

  .input-block {
    width: 100%;
  }
  .input-block {
    + .input-block {
      margin-top: 24px;
    }
    label {
      display: flex;
      color: #8fa7b3;
      margin-bottom: 8px;
      line-height: 24px;
      span {
        font-size: 14px;
        color: #8fa7b3;
        margin-left: 24px;
        line-height: 24px;
      }
    }

    input:not([type="checkbox"]) {
      width: 100%;
      background: #f5f8fa;
      border: 1px solid #d3e2e5;
      border-radius: 20px;
      outline: none;
      color: #5c8599;
      height: 64px;
      padding: 0 16px;
    }
  }

  .confirm-button {
    margin-top: 64px;
    width: 70%;
    height: 64px;
    border: 0;
    cursor: pointer;
    background: #3cdc8c;
    border-radius: 20px;
    color: #ffffff;
    font-weight: 800;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: background-color 0.2s;
    svg {
      margin-right: 16px;
    }
    &:hover {
      background: #36cf82;
    }
  }
`;