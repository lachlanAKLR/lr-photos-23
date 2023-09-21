import React, { useRef } from 'react';
import styled, { css } from 'styled-components';

const SwitchStyles = styled.div`
  .switch {
    display: none;
  }

  @media screen and (max-width: 799px) {
    .switch {
      position: fixed;
      bottom: 7.5px;
      left: 10px;
      display: inline-block;
      width: 55px;
      height: 30px;
      z-index: 2000;
      transition: all 0.5s ease 0.5s;
      ${(props) =>
        props.isActive
          ? css`
              opacity: 0;
            `
          : css`
              opacity: 100%;
            `};
      ${(props) =>
        props.isHidden
          ? css`
              display: none;
            `
          : css`
              display: inline-block;
            `};
    }

    .switch input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      /* background-color: #ccc; */
      -webkit-transition: 0.4s;
      transition: 0.4s;
      border: 0.5px solid black;
    }

    .slider:before {
      position: absolute;
      content: '';
      height: 22px;
      width: 22px;
      left: 4px;
      bottom: 3px;
      background-color: white;
      -webkit-transition: 0.4s;
      transition: 0.4s;
    }

    input:checked + .slider {
      background-color: black;
    }

    input:focus + .slider {
      /* box-shadow: 0 0 1px #2196f3; */
    }

    input:checked + .slider:before {
      -webkit-transform: translateX(24px);
      -ms-transform: translateX(24px);
      transform: translateX(24px);
    }
    .slider.round {
      border-radius: 34px;
    }

    .slider.round:before {
      border-radius: 50%;
      border: 0.5px solid black;
    }
  }
`;

export default function Switch({ handleClickToggle, isActive, isHidden }) {
  return (
    <SwitchStyles isActive={isActive} isHidden={isHidden}>
      <label className="switch">
        <input type="checkbox" onClick={handleClickToggle} />
        <span className="slider round" />
      </label>
    </SwitchStyles>
  );
}
