import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={283}
    height={500}
    viewBox="0 2 270 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="3" y="10" rx="30" ry="30" width="224" height="294" />
    <rect x="55" y="310" rx="14" ry="14" width="112" height="30" />
    <rect x="16" y="348" rx="20" ry="20" width="191" height="38" />
    <rect x="22" y="396" rx="10" ry="10" width="75" height="39" />
    <rect x="186" y="416" rx="0" ry="0" width="1" height="2" />
    <rect x="131" y="395" rx="10" ry="10" width="73" height="38" />
  </ContentLoader>
);

export default Skeleton;
