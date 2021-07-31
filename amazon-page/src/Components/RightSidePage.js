import React from "react";
import classes from ".././css/RightSidePage.module.css";

const rightSidePage = (props) => {
  const colorState = props.data.colorOptions.map((item, position) => {
    const classArr = [classes.productImage]
    if (position === props.currentImage) {
      classArr.push(classes.selectedProductImage);
    }

    return (
      <img
        key={position}
        className={classArr.join(' ')}
        src={item.imageUrl}
        alt={item.styleName}
        onClick={()=>props.onClick(position)}
      />
    );
  });

  const featureLists = props.data.featureList.map((item,position) => {
    const classArray = [classes.buttons];
    if(position === 0) {
      classArray.push(classes.buttons)
    }
    return (
      <button key={position} className={classArray.join(' ')}>{item}</button>
        );
    });
  return (
    <div className={classes.rightSidePage}>
      <h1>{props.data.title}</h1>
      <p>{props.data.description}</p>
      <h3 className={classes.selectStyle}>Select Style</h3>
      <div className={classes.productDescription}>{colorState}</div>
      <h3 className={classes.selectStyle}>Features</h3>
      <div>
        {featureLists}
      </div>
      <button className={classes.buttonsBuy}>Buy Now</button>
    </div>
  )
}

export default rightSidePage;
