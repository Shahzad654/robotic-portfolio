import React from "react";
import styled from "styled-components";

export default function ThemeButton({ isDarkMode, toggleTheme }) {
  return (
    <>
      <StyledButton>
        <div className="switch">
          <input
            type="checkbox"
            className="switch__input"
            id="Switch"
            checked={!isDarkMode}
            onChange={toggleTheme}
          />
          <label className="switch__label" htmlFor="Switch">
            <span className="switch__indicator"></span>
            <span className="switch__decoration"></span>
          </label>
        </div>
      </StyledButton>
    </>
  );
}

const StyledButton = styled.div`
  display: flex;
  /* justify-content: end;
  align-items: flex-end; */
  /* padding: 2% 3%; */
  margin-top: 1%;
  margin-left: 2%;
  .switch {
    display: inline-block;
    position: relative;
  }

  .switch__input {
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    height: 1px;
    width: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
  }

  .switch__label {
    position: relative;
    display: inline-block;
    /* width: 120px;
    height: 60px; */
    width: 75px;
    height: 40px;
    background-color: #2b2b2b;
    border: 2px solid #5b5b5b;
    border-radius: 9999px;
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.46, 0.03, 0.52, 0.96);
  }

  .switch__indicator {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) translateX(-72%);
    display: block;
    width: 25px;
    height: 25px;
    background-color: #7b7b7b;
    border-radius: 9999px;
    box-shadow: 10px 0px 0 0 rgba(#000000, 0.2) inset;

    &::before,
    &::after {
      position: absolute;
      content: "";
      display: block;
      background-color: #ffffff;
      border-radius: 9999px;
    }

    &::before {
      top: 7px;
      left: 7px;
      width: 9px;
      height: 9px;
      background-color: #ffffff;
      opacity: 0.6;
    }

    &::after {
      bottom: 8px;
      right: 6px;
      width: 14px;
      height: 14px;
      background-color: #ffffff;
      opacity: 0.8;
    }
  }

  .switch__decoration {
    position: absolute;
    top: 65%;
    left: 50%;
    display: block;
    width: 5px;
    height: 5px;
    background-color: #ffffff;
    border-radius: 9999px;
    animation: twinkle 0.8s infinite -0.6s;

    &::before,
    &::after {
      position: absolute;
      display: block;
      content: "";
      width: 5px;
      height: 5px;
      background-color: #ffffff;
      border-radius: 9999px;
    }

    &::before {
      top: -20px;
      left: 10px;
      opacity: 1;
      animation: twinkle 0.6s infinite;
    }

    &::after {
      top: -7px;
      left: 30px;
      animation: twinkle 0.6s infinite -0.2s;
    }
  }

  @keyframes twinkle {
    50% {
      opacity: 0.2;
    }
  }

  .switch__indicator {
    &,
    &::before,
    &::after {
      transition: all 0.4s cubic-bezier(0.46, 0.03, 0.52, 0.96);
    }
  }

  .switch__input:checked + .switch__label {
    background-color: #8fb5f5;
    border-color: #347cf8;

    .switch__indicator {
      background-color: #ecd21f;
      box-shadow: none;
      transform: translate(-50%, -50%) translateX(72%);

      &::before,
      &::after {
        display: none;
      }
    }

    .switch__decoration {
      top: 50%;
      transform: translate(0%, -50%);
      animation: cloud 8s linear infinite;

      width: 20px;
      height: 20px;

      &::before {
        width: 10px;
        height: 10px;
        top: auto;
        bottom: 0;
        left: -8px;
        animation: none;
      }

      &::after {
        width: 15px;
        height: 15px;
        top: auto;
        bottom: 0;
        left: 16px;
        animation: none;
      }

      &,
      &::before,
      &::after {
        border-radius: 9999px 9999px 0 0;
      }

      &::after {
        border-bottom-right-radius: 9999px;
      }
    }
  }

  @keyframes cloud {
    0% {
      transform: translate(0%, -50%);
    }
    50% {
      transform: translate(-50%, -50%);
    }
    100% {
      transform: translate(0%, -50%);
    }
  }
`;
