import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={283}
    height={490}
    viewBox="0 0 300 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="20" y="10" rx="30" ry="30" width="224" height="294" />
    <rect x="75" y="310" rx="14" ry="14" width="112" height="30" />
    <rect x="35" y="348" rx="20" ry="20" width="191" height="38" />
    <rect x="35" y="396" rx="10" ry="10" width="75" height="39" />
    <rect x="1" y="395" rx="10" ry="10" width="73" height="38" />
  </ContentLoader>
);

export default Skeleton;
