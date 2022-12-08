import * as React from "react";

export const DownloadsComponent = props => {
  console.log(props);
  return (
    <>
      &nbsp;<a href={props.link}>get download</a>
    </>
  );
};

export default DownloadsComponent;
