import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';
import { format } from 'date-fns';
import { motion, useDomEvent } from 'framer-motion';
import Lightbox from './Lightbox';

const RightMotionStyles = styled.div`
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
`;

const transition = {
  type: 'spring',
  damping: 25,
  stiffness: 120,
};

function SingleImage({ image, handleClick, index }) {
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
        onClick={() => handleClick(image, index)}
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

export default function RightMotion({
  images,
  handleClick,
  isOpen,
  handleRotationRight,
  setIsOpen,
  index,
  isLeft,
  isActive,
}) {
  return (
    <RightMotionStyles isActive={isActive}>
      <motion.div
        animate={{ opacity: isOpen ? 1 : 0 }}
        transition={transition}
        className={isLeft ? 'RHS__inner blur' : 'RHS__inner'}
        onClick={() => setOpen(false)}
      >
        <div className="RHS__grid">
          {images.nodes.map((image, index) => (
            <SingleImage
              key={image.id}
              image={image}
              handleClick={handleClick}
              isOpen={isOpen}
              index={index}
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
          />
        )}
      </motion.div>
    </RightMotionStyles>
  );
}
