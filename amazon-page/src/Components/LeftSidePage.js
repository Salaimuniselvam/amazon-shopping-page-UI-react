import React from "react";
import classes from ".././css/LeftSidePage.module.css";

const leftSidePage = (props) => {
  const currentHour =
    new Date().getHours() > 9
      ? new Date().getHours()
      : "0" + new Date().getHours();
  const currentMinutes =
    new Date().getMinutes() > 9
      ? new Date().getMinutes()
      : "0" + new Date().getMinutes();
  return (
    <div className={classes.leftSidePage}>
      <img src={props.imagePosition} alt="black strap " />
      {props.showHeartBeatSection ? (
        <div className={classes.HeartBeat}>
          <i class="fas fa-heartbeat"></i>
          <p className="count">77</p>
        </div>
      ) : (
        <div className={classes.timeZone}>
          <p>{`${currentHour}:${currentMinutes}`}</p>
        </div>
      )}
    </div>
  );
};

export default leftSidePage;
