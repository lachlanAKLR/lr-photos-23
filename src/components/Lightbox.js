import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { format } from 'date-fns';

export default function Lightbox({
  image,
  index,
  isOpen,
  handleRotationRight,
  setIsOpen,
  hideToggle,
}) {
  const handleClick = (e) => {
    if (e.target.classList.contains('dismiss')) {
      setIsOpen(null);
      hideToggle();
    }
  };
  const dateRaw = format(new Date(isOpen.publishDate), 'dd-MM-yy');
  const date = dateRaw.replace(/-/g, '.');
  const isLandscape = isOpen.format !== true;
  return (
    <div className="image__lightbox dismiss" onClick={handleClick}>
      <div
        onClick={handleClick}
        className={
          isLandscape ? 'lightbox__inner landscape' : 'lightbox__inner portrait'
        }
      >
        <GatsbyImage
          image={isOpen.image.asset.gatsbyImageData}
          alt="image"
          imgStyle={{ objectFit: `contain` }}
        />
      </div>
      <div className="lightbox__caption">
        <p>
          <span className="lightbox__date">{date}</span>
          {isOpen.caption}
        </p>
      </div>
    </div>
  );
}
