/**
 * Step 7:
 *   <i>  is icon
 */
import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faCheckSquare,
  faWindowClose,
  faCaretSquareDown
} from "@fortawesome/free-solid-svg-icons";

import "./Tour.scss";

/**
 *       <FontAwesomeIcon icon={faCheckSquare} />
          Favorite Drink: <FontAwesomeIcon icon={faCoffee} />
 */
export default class Tour extends Component {
  state = {
    showInfo: false
  };

  /* use arrow function so we don't have to bind this to the function. 
     toggle showInfo boolean 
   */
  handleInfo = () => {
    this.setState({ showInfo: !this.state.showInfo });
  };
  render() {
    const { id, city, img, name, info } = this.props.tour;
    const { removeTour } = this.props;

    return (
      <article className="tour">
        <div className="img-container">
          <img width="200" src={img} alt="pexell" />
          <span
            className="close-btn"
            onClick={() => {
              removeTour(id);
            }}
          >
            <i>
              {" "}
              <FontAwesomeIcon icon={faWindowClose} />
            </i>
          </span>
        </div>
        <div className="tour-info">
          <h3>{city}</h3>
          <h4>{name}</h4>
          <h5>
            info
            <span>
              <i>
                {" "}
                <FontAwesomeIcon
                  icon={faCaretSquareDown}
                  onClick={this.handleInfo}
                />
              </i>
            </span>
          </h5>
          {this.state.showInfo && <p> {info} </p>}
        </div>
      </article>
    );
  }
}
