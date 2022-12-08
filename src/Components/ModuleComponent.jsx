import * as React from "react";
import { DownloadsComponent } from "./DownloadsComponent";

export const ModuleComponent = props => {
  return (
    <>
      <p>
        &nbsp; >> &nbsp; {props.module.name}
        {props.module.resources && (
          <>
            <DownloadsComponent link={props.module.assets[0]} />
          </>
        )}
      </p>
    </>
  );
};

export default ModuleComponent;
