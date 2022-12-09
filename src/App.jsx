import "./styles.css";
import * as React from "react";
import CourseComponent from "./Components/CourseComponent";

const App = props => {
  const data = {
    courses: [
      {
        name: "Ultra-fast Testing",
        modules: [
          {
            name: "Architecture",
            assets: ["https://blah.com/1"],
            resources: [{ name: "PDF Architecture Diagram" }]
          },
          { name: "Execution", assets: ["https://blah.com/2"] },
          { name: "Anatomy Simple Test", assets: ["https://blah.com/3"] }
        ]
      },
      {
        name: "Infinite Architecture",
        modules: [
          { name: "Presenters & ViewModels", assets: ["https://blah.com/x"] },
          { name: "The Programmers Model", assets: ["https://blah.com/y"] }
        ],
        freebies: [{ name: "State Architecture" }, { name: "Mobx Mastery" }]
      },
      { name: "Engineering Leadership", dates: [{}, {}, {}] }
    ]
  };

  const viewModel = {};
  viewModel.courses = data.courses.map(courseVm => {
    return {
      title: `${courseVm.name}  | (bonus inc. ${
        courseVm.freebies ? "y" : "n"
      })`,
      modules: !courseVm.modules
        ? []
        : courseVm.modules.map(moduleVm => {
            return {
              title: ">> " + moduleVm.name,
              haveDownloadlink: !!moduleVm.resources,
              downloadlink: moduleVm.assets[0]
            };
          })
    };
  });

  return (
    <>
      {viewModel.courses.map(courseVm => {
        return (
          <div key={courseVm.title}>
            {courseVm.title}
            <CourseComponent vm={courseVm} />
            {/* <CourseComponent course={course} /> */}
          </div>
        );
      })}
    </>
  );
};

export default App;
