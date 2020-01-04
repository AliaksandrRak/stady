import React from 'react';
import './searchElStyle.sass';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';



class SearchElClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {

    return (
      <div className="searchCard">
        <div className="topCard">
          <img src={this.props.el.img} alt="" />
          <div className="circleBlock">
            
            <div className="circle" ><span>{this.props.el.bill}</span></div>
            {this.props.el.deliver &&
            <i className="circleSmall" />
            }
            {this.props.el.chiliPepper &&
            <i className="circleSmall2" />
            }
            {this.props.el.leaf &&
            <i className="circleSmall3" />
            } 
          </div>
        </div>

        <div className="bottomCard">
          <span className="name">{this.props.el.name}</span>
          <span className="time">Время работы: {this.props.el.timeWork}</span>
          <span className="time">Тип кухни: {this.props.el.cuisine.map((el,index)=>el+"; ")}</span>
          <span className="address">{this.props.el.address}</span>
          <p className="description">{this.props.el.description}</p>
        </div>
      </div>
    );
  }
}


const SearchEl = connect(
  (state) => ({
    mainReduser: state.mainReduser,
  }),
)(SearchElClass);
export default SearchEl;