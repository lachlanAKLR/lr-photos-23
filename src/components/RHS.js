import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';
import { format } from 'date-fns';
import Lightbox from './Lightbox';

const RHSStyles = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: calc(66.66% - 30px);
  height: 100vh;
  background-color: #fff;
  padding: 0;
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  z-index: 0;
  transition: 1s all ease;
  /* ${(props) =>
    props.isActive
      ? css`
          right: 33.33%;
        `
      : css`
          right: 0;
        `}; */

  ::-webkit-scrollbar {
    display: none;
  }

  .blur .RHS__image {
    filter: blur(25px);
    transition: all 0.75s ease;
  }

  .RHS__image {
    filter: blur(0px);
    transition: all 0.75s ease;
  }

  .RHS__grid {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    gap: 150px 20px;
    padding-left: 60px;
  }

  p {
    padding-top: 5px;
    font-size: 14px;
    line-height: 14px;
  }
  .image__date {
    padding-right: 20px;
  }

  .RHS__image {
    width: 100%;
  }

  .left {
    grid-column-start: 1;
    grid-column-end: 5;
  }

  .center {
    grid-column-start: 3;
    grid-column-end: 7;
  }

  .right {
    grid-column-start: 5;
    grid-column-end: 9;
  }

  .LHS__image:nth-child(1) {
    grid-column-start: 5;
    grid-column-end: 9;
  }

  @media screen and (max-width: 799px) {
    width: 100%;
    ${(props) =>
      props.isToggle
        ? css`
            opacity: 0%;
            pointer-events: none;
          `
        : css`
            opacity: 100%;
            pointer-events: all;
          `};

    .RHS__grid {
      padding: 0px;
    }

    .RHS__inner {
    }

    .blur .RHS__image {
      filter: blur(0px);
    }

    .lightbox__inner .gatsby-image-wrapper {
      height: 100%;
      width: auto;
      /* max-height: 500px; */
    }

    .image__lightbox .landscape .gatsby-image-wrapper img {
      width: 100%;
      height: auto; /* max-height: 500px; */
    }

    .image__lightbox {
      padding: 0 0 50px 0;
    }

    .image__lightbox .portrait {
      padding: 50px;
    }

    .image__lightbox .landscape {
      padding: 20px;
    }
  }
`;

function SingleImage({ image, handleClick, index, hideToggle }) {
  const dateRaw = format(new Date(image.publishDate), 'dd-MM-yy');
  const date = dateRaw.replace(/-/g, '.');
  const isPortrait = image.format === true;
  return (
    <div
      className={
        isPortrait
          ? `RHS__image portrait ${image.layout}`
          : `RHS__image landscape ${image.layout}`
      }
    >
      <button
        type="button"
        className="image__button"
        onClick={() => {
          handleClick(image, index);
          hideToggle();
        }}
      >
        <GatsbyImage
          image={image.image.asset.gatsbyImageData}
          alt={`image of ${image.caption}`}
        />
      </button>
      <div className="image__caption">
        <p>
          <span className="image__date">{date}</span>
          <span className="image__text">{image.caption}</span>
        </p>
      </div>
    </div>
  );
}

export default function RHS({
  images,
  handleClick,
  isOpen,
  handleRotationRight,
  setIsOpen,
  index,
  isLeft,
  isActive,
  isToggle,
  hideToggle,
}) {
  return (
    <RHSStyles isActive={isActive} isToggle={isToggle}>
      <div className={isLeft ? 'RHS__inner blur' : 'RHS__inner'}>
        <div className="RHS__grid">
          {images.nodes.map((image, index) => (
            <SingleImage
              key={image.id}
              image={image}
              handleClick={handleClick}
              isOpen={isOpen}
              index={index}
              hideToggle={hideToggle}
            />
          ))}
        </div>
        {isOpen && (
          <Lightbox
            handleClick={handleClick}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            index={index}
            handleRotationRight={handleRotationRight}
            hideToggle={hideToggle}
          />
        )}
      </div>
    </RHSStyles>
  );
}
