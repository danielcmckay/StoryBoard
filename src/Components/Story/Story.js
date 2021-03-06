import React, { useState, useContext } from "react";
import themeContext from '../../context/themeContext'
import "./Story.css";

const Story = props => {
  const [isExpanded, expand] = useState(false);
  const {dark} = useContext(themeContext);


  const expandStory = e => {
    expand(!isExpanded);
  };

  const deleteClickHandler = e => {
    props.deleteStory(props.id);
  };

  // const updateProgressHandler = e => {
  //   props.updateProgress(props.id);
  // }

  return (
    <div className={!dark ? 'Story' : 'Story Story-dark'}>
      <div className="TitleDiv">
        <h2>{props.title}</h2>
        {/* <div className="ProgressTag" onClick={updateProgressHandler}>{props.progress === true ? 'In Progress' : 'Completed'}</div> */}
      </div>
      <div
        className="Description"
        style={isExpanded ? { height: "170px" } : { height: "45px" }}
      >
        <div>{`${props.description} `}</div>{" "}
        <div className="buttons">
          <i className="fas fa-edit" onClick={() => props.editStory(props.id)}></i>
          <i className="fas fa-trash-alt" onClick={deleteClickHandler}></i>
          <i
            className={
              !isExpanded ? "fas fa-chevron-down" : "fas fa-chevron-up"
            }
            onClick={expandStory}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default Story;
