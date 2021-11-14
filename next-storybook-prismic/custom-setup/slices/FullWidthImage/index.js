import React from 'react';

const FullWidthImage = ({ slice }) => (
  <section className="container">
    <img
      className="fullWidthImage"
      src={slice.primary.image.url}
      alt={slice.primary.image.alt}
    />
    <style jsx="true">{`
      .fullWidthImage {
        object-fit: cover;
      }
    `}</style>
  </section>
);

export default FullWidthImage;
