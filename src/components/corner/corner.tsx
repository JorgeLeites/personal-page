import React, { useState } from 'react';

import './corner.scss';
import { ReactComponent as GithubLogo } from '../../images/github.svg';
import { ReactComponent as BentCorner } from '../../images/corner.svg';

const CORNER_WIDTH = 250;

export default function Corner() {
  const [open, setOpen] = useState(false);
  const percentage = open ? 100 : 20;

  const handleClick = () => {
    setOpen((currentValue) => !currentValue);
  };

  const getPolygon = () => {
    return `polygon(${100 - percentage}% 0%, 100% 0%, 100% ${percentage}%)`;
  };

  return (
    <div className="corner-container">
      <BentCorner
        className="bent-corner"
        style={{ width: (CORNER_WIDTH * percentage) / 100 }}
        onClick={handleClick}
      />
      <div className="corner text-center" style={{ clipPath: getPolygon() }}>
        <a href="https://github.com/JorgeLeites/personal-page" className="github-link">
          <GithubLogo className="github-logo" />
          <h6 className="mt-1">See on GitHub</h6>
        </a>
      </div>
    </div>
  );
}
