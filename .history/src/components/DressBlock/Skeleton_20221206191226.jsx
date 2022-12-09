import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={360}
    height={500}
    viewBox="0 0 360 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="30" ry="30" width="260" height="300" />
    <rect x="58" y="315" rx="14" ry="14" width="136" height="30" />
    <rect x="9" y="357" rx="20" ry="20" width="243" height="41" />
    <rect x="11" y="413" rx="10" ry="10" width="71" height="39" />
    <rect x="186" y="416" rx="0" ry="0" width="1" height="2" />
    <rect x="177" y="415" rx="10" ry="10" width="73" height="37" />
  </ContentLoader>
);

export default Skeleton;
