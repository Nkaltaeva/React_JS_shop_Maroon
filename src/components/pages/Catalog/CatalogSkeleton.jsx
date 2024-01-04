import React from "react";
import ContentLoader from "react-content-loader";

const CatalogSkeleton = (props) => (
  <ContentLoader
    speed={2}
    width={288}
    height={466}
    viewBox="0 0 288 466"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="0" ry="0" width="260" height="252" />
    <rect x="0" y="356" rx="0" ry="0" width="260" height="38" />
    <rect x="0" y="261" rx="0" ry="0" width="260" height="33" />
    <rect x="0" y="301" rx="0" ry="0" width="136" height="24" />
    <rect x="0" y="330" rx="0" ry="0" width="136" height="21" />
  </ContentLoader>
);

export default CatalogSkeleton;
