import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const InfoStyles = styled.div`
  .info__content {
    position: fixed;
    height: 100%;
    width: 33.33%;
    bottom: 0;
    right: 0;
    padding: 25px 35px;
    background-color: #ff4d00;
    transition: all ease 1s;
  }
  a {
    color: black;
  }
  p {
    text-transform: none;
    padding-bottom: 20px;
  }
  .close__button {
    padding-bottom: 0;
    position: fixed;
    bottom: 15px;
    right: 15px;
    z-index: 4999;
    border: 0.5px solid black;
    padding: 5px 10px;
    transition: all 1s ease;
    background-color: rgba(220, 220, 220, 0.2);

    ${(props) =>
      props.isActive
        ? css`
            width: 400px;
            height: 500px;
            border-radius: 25px;
            backdrop-filter: blur(15px);
            text-align: left;
          `
        : css`
            width: 75px;
            height: 35px;
            border-radius: 20px;
            backdrop-filter: blur(5px);
            text-align: center;
          `};
  }

  .close__text p {
    text-transform: uppercase;
    position: fixed;
    z-index: 4999;
    padding: 0;
    transition: all 1s ease;

    ${(props) =>
      props.isActive
        ? css`
            bottom: 30px;
            right: 32px;
          `
        : css`
            bottom: 21px;
            right: 30px;
          `};
  }

  .info__text {
    width: 360px;
    right: 30px;
    bottom: 260px;
    z-index: 4999;
    position: fixed;
    transition: 1s all ease 1s;
    ${(props) =>
      props.isActive
        ? css`
            opacity: 1;
          `
        : css`
            opacity: 0;
            transition: 0s all ease 0s;
          `};
    ${(props) =>
      props.isActive
        ? css`
            visibility: visible;
          `
        : css`
            visibility: hidden;
          `};
  }

  /* .close__button p:hover {
    background-color: rgba(220, 220, 220, 0.5);
  } */

  .close__button .open {
    background-color: rgba(220, 220, 220, 0);
  }

  a:hover {
    text-decoration: underline;
    text-decoration-thickness: 0.5px;
    text-underline-offset: 2px;
  }

  @media screen and (max-width: 799px) {
    .close__button {
      bottom: 10px;
      right: 10px;
      ${(props) =>
        props.isActive
          ? css`
              width: calc(100% - 20px);
              height: 500px;
            `
          : css`
              width: 65px;
              height: 30px;
            `};
    }

    .close__text p {
      ${(props) =>
        props.isActive
          ? css`
              bottom: 30px;
              right: 32px;
            `
          : css`
              bottom: 16px;
              right: 26px;
            `};
    }

    .info__text {
      width: calc(100% - 60px);
      right: 30px;
      bottom: 290px;
    }
  }
`;

function InfoText({ isActive }) {
  return (
    <div className="info__text">
      <p>ABOUT</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis viverra
        sit amet ante et placerat. Donec erat metus, aliquet nec erat quis,
        placerat facilisis magna. Aenean efficitur, nulla rutrum laoreet
        molestie.
      </p>
    </div>
  );
}

export default function Info({ isActive, handleClickInfo }) {
  return (
    <InfoStyles isActive={isActive}>
      <div onClick={handleClickInfo} className="close__button" />
      <div onClick={handleClickInfo} className="close__text">
        <p>{isActive ? 'Close' : 'Info'}</p>
      </div>
      <InfoText />
    </InfoStyles>
  );
}
