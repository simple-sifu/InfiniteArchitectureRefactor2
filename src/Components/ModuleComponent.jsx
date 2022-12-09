import * as React from "react";
import { DownloadsComponent } from "./DownloadsComponent";

export const ModuleComponent = props => {
  return (
    <>
      <p>
        {props.vm.title}
        {props.vm.haveDownloadlink && (
          <DownloadsComponent vm={props.vm.downloadlink} />
        )}
        {/* {props.module.resources && (
          <>
            <DownloadsComponent link={props.module.assets[0]} />
          </>
        )} */}
      </p>
    </>
  );
};

export default ModuleComponent;
