import React, { Component } from "react";
import { tourData } from "../tourData";

/**
 * Step 5:
 */
import "./TourList.scss";
import Tour from "../Tour/Tour";

export default class Tourlist extends Component {
  state = {
    tours: tourData
  };
  /* remove tour from tours */
  removeTour = id => {
    console.log("id:" + id);
    const { tours } = this.state;
    const filterTours = tours.filter(tour => tour.id !== id);

    this.setState({
      tours: filterTours
    });
  };

  render() {
    const { tours } = this.state;

    return (
      <section className="tourlist">
        {/* loop through each item and return a Tour componet  */}
        {tours.map(item => {
          return (
            <Tour key={item.id} tour={item} removeTour={this.removeTour} />
          );
        })}
      </section>
    );
  }
}
