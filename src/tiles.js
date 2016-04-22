import React from 'react';
import Picture from '@economist/component-picture';
import Tile from './tile';

export default function Tiles({
  content,
  section,
}) {
  const tileElements = content.map((tile) => {
    const props = {
      ...tile,
      section,
    };
    return (
      <Tile {...props} key={tile.id} />
    );
  });
  return (
    <div className={`tiles__flex-section-container tiles__flex-section-container--${ section }`}>
      <div className="tiles__section-item">
        <div className="tiles__flex-container">
          {tileElements}
        </div>
      </div>
    </div>
  );
}

if (process.env.NODE_ENV !== 'production') {
  Tiles.propTypes = {
    content: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        id: React.PropTypes.number.isRequired,
        link: React.PropTypes.shape({
          href: React.PropTypes.string,
        }).isRequired,
        flytitle: React.PropTypes.string,
        rubric: React.PropTypes.string,
        slug: React.PropTypes.string,
        image: React.PropTypes.shape(
          Picture.propTypes,
        ),
      })
    ).isRequired,
    section: React.PropTypes.string.isRequired,
  };
}
