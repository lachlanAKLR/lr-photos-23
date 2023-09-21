import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';
import { format } from 'date-fns';
import Lightbox from './Lightbox';

const LHSStyles = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: calc(33.33% + 70px);
  height: 100vh;
  overflow: scroll;
  background-color: #fff;
  -ms-overflow-style: none;
  scrollbar-width: none;
  transition: 1s all ease;

  ::-webkit-scrollbar {
    display: none;
  }

  .LHS__inner {
    padding: 150px 100px 10px 10px;
  }

  .blur .LHS__image {
    filter: blur(25px);
    transition: all 0.75s ease;
  }

  .LHS__image {
    filter: blur(0px);
    transition: all 0.75s ease;
  }

  .LHS__grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 50px 10px;
  }

  .LHS__image {
    width: 100%;
    grid-column: span 2;
  }

  p {
    padding-top: 5px;
    font-size: 14px;
    line-height: 14px;
  }

  @media screen and (max-width: 799px) {
    width: 100%;

    .blur .LHS__image {
      filter: blur(0px);
      transition: all 0.75s ease;
    }
    .LHS__inner {
      padding: 150px 10px 10px 10px;
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
          ? `LHS__image portrait ${image.layout}`
          : `LHS__image landscape ${image.layout}`
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
        </p>
      </div>
    </div>
  );
}

export default function LHS({
  images,
  handleClick,
  isOpen,
  handleRotationRight,
  setIsOpen,
  index,
  isLeft,
  isActive,
  isToggle,
  handleClickInfo,
  hideToggle,
}) {
  return (
    <LHSStyles isActive={isActive} isToggle={isToggle}>
      <div className={isLeft ? 'LHS__inner' : 'LHS__inner blur'}>
        <div className="LHS__grid">
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
    </LHSStyles>
  );
}
