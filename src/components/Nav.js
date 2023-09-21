import React from 'react';
import styled from 'styled-components';
import Seconds from './Seconds';
import Minutes from './Minutes';
import Hours from './Hours';
import Weather from './Weather';

const NavStyles = styled.div`
  .nav__wrapper {
    position: fixed;
    width: 33.33%;
    padding: 10px;
    z-index: 4000;
  }
  .nav__lhs {
    width: 100%;
    display: flex;
    justify-content: space-between;
    text-transform: capitalize;
  }

  h1,
  li {
    font-size: 18px;
  }

  @media screen and (max-width: 799px) {
    .nav__wrapper {
      width: 100%;
    }

    h1,
    li {
      font-size: 14px;
    }
  }
`;

export default function Nav() {
  return (
    <NavStyles>
      <div className="nav__wrapper">
        <div className="nav__lhs">
          <h1>Lachlan Richards</h1>
          <Weather />
        </div>
      </div>
    </NavStyles>
  );
}

{
  /* <div className="nav-bottom">
<div className="nav-time">
  <Hours />
  <Minutes />
  <Seconds />
</div>
<Weather />
<div className="nav-date">
  <p>
    {(new Date().getDate() + 0 < 10 ? '0' : '') +
      (new Date().getDate() + 0)}
    /
    {(new Date().getMonth() + 1 < 10 ? '0' : '') +
      (new Date().getMonth() + 1)}
    /{new Date().getFullYear()}
  </p>
</div>
</div> */
}
