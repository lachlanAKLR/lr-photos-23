import React, { useEffect, useState } from 'react';
import { graphql } from 'gatsby';
import Nav from '../components/Nav';
import GlobalStyles from '../styles/GlobalStyles';
import LHS from '../components/LHS';
import RHS from '../components/RHS';
import Cursor from '../components/Cursor';
import Info from '../components/Info';

export default function HomePage({ data }) {
  const { pointImages } = data;
  const { slowImages } = data;
  const isBrowser = typeof window !== 'undefined';

  const [isOpen, setIsOpen] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const handleClick = (item, index) => {
    setCurrentIndex(index);
    setIsOpen(item);
  };

  const [isActive, setIsActive] = useState(null);
  const handleClickInfo = (event) => {
    setIsActive((current) => !current);
  };

  const handleRotationRight = () => {
    const totalLength = slowImages.nodes.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = slowImages.nodes[0];
      setIsOpen(newUrl);
      return;
    }
    const newIndex = (currentIndex = 1);
    const newUrl = slowImages.nodes.filter(
      (item) => slowImages.indexOf(item) === newIndex
    );
    const newItem = newUrl[0];
    setIsOpen(newItem);
    setCurrentIndex(newIndex);
  };

  const [globalCoords, setGlobalCoords] = useState({ x: 0, y: 0 });

  const mousePercent = isBrowser
    ? Math.floor((globalCoords.x / window.innerWidth) * 100)
    : '';
  const isLeft = mousePercent < 33;

  useEffect(() => {
    const handleWindowMouseMove = (event) => {
      setGlobalCoords({
        x: event.screenX,
        y: event.screenY,
      });
    };
    window.addEventListener('mousemove', handleWindowMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleWindowMouseMove);
    };
  }, []);

  return (
    <>
      <Cursor isOpen={isOpen} isActive={isActive} />
      <GlobalStyles />
      <Nav />
      <Info handleClickInfo={handleClickInfo} isActive={isActive} />
      <LHS
        images={pointImages}
        isLeft={isLeft}
        handleClick={handleClick}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        handleRotationRight={handleRotationRight}
        isActive={isActive}
      />
      <RHS
        images={slowImages}
        isLeft={isLeft}
        handleClick={handleClick}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        handleRotationRight={handleRotationRight}
        isActive={isActive}
      />
    </>
  );
}

export const query = graphql`
  query {
    pointImages: allSanityPoint {
      nodes {
        id
        caption
        format
        publishDate
        image {
          asset {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    }
    slowImages: allSanitySlow(sort: { fields: [order], order: ASC }) {
      nodes {
        id
        caption
        format
        publishDate
        layout
        image {
          asset {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    }
  }
`;
