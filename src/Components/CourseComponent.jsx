import * as React from "react";
import ModuleComponent from "./ModuleComponent";

export const CourseComponent = props => {
  return (
    <>
      {props.vm.modules.map(moduleVm => {
        return <ModuleComponent vm={moduleVm} />;
      })}
      {/* {props.course.modules &&
        props.course.modules.map(module => {
          return (
            <>
              <ModuleComponent module={module} />
            </>
          );
        })} */}
    </>
  );
};

export default CourseComponent;
