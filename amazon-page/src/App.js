import React, { Component } from "react";
import Header from "./Components/Header";
import classes from "./css/MainContainer.module.css";
import leftsideclass from "./css/LeftSidePage.module.css";
import rightsideclass from "./css/RightSidePage.module.css";
import LeftSidePage from "./Components/LeftSidePage";
import RightSidePage from "./Components/RightSidePage";
import ProductData from "./ProductData/ProductData";
class App extends Component {
  state = {
    productData: ProductData,
    showHeartBeatSection: true,
    imagePosition:0,
  };
  
  onClick = (pos) => {
    this.setState({imagePosition: pos});
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className={classes.mainContainer}>
          <div className={leftsideclass.leftSidePage}>
            <LeftSidePage
              imagePosition={this.state.productData.colorOptions[this.state.imagePosition].imageUrl}

              productData={this.state.productData}
              showHeartBeatSection={this.state.showHeartBeatSection}
            />
          </div>
          <div className={rightsideclass.rightSidePage}>
            <RightSidePage data={this.state.productData} currentImage={this.state.imagePosition} 
            onClick={this.onClick}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
