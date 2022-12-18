import React from 'react';

import ContentLoader from "react-content-loader";
const SkeletonCart = (props) => (
  <ContentLoader 
    speed={2}
    width={700}
    height={195}
    viewBox="0 0 700 195"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="186" y="416" rx="0" ry="0" width="1" height="2" /> 
    <rect x="0" y="0" rx="20" ry="20" width="449" height="133" /> 
    <rect x="349" y="130" rx="0" ry="0" width="8" height="4" />
  </ContentLoader>
)

export default SkeletonCart;