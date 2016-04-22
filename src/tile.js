import React from 'react';
import Picture from '@economist/component-picture';

export default function Tile({
  link,
  section,
  flytitle,
  rubric,
  image,
}) {
  let sectionEl = null;
  if (section) {
    sectionEl = <div className="tiles__section">{section}</div>;
  }

  let flytitleEl = null;
  if (flytitle) {
    flytitleEl = <div className="tiles__flytitle">{flytitle}</div>;
  }

  let rubricEl = null;
  if (rubric) {
    rubricEl = <div className="tiles__rubric">{rubric}</div>;
  }

  let content = null;
  if (sectionEl || flytitleEl || rubricEl) {
    content = (
      <div className="tiles__content-container">
        {sectionEl}
        {flytitleEl}
        {rubricEl}
      </div>
    );
  }

  return (
    <div className="tiles__item">
      <a href={link.href} className="tiles__link">
        <div className="tiles__image-container">
          <Picture {...image} className="tiles__image" />
        </div>
        {content}
      </a>
    </div>
  );
}

if (process.env.NODE_ENV !== 'production') {
  Tile.propTypes = {
    link: React.PropTypes.shape({
      href: React.PropTypes.string,
    }).isRequired,
    section: React.PropTypes.string,
    flytitle: React.PropTypes.string,
    rubric: React.PropTypes.string,
    image: React.PropTypes.shape(
      Picture.propTypes,
    ),
  };
}
