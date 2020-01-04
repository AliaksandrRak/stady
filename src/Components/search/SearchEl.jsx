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
          <img src="https://koko.by/wp-content/uploads/2019/11/IMG_6290-267x200.jpg" alt="" />
          <div className="circleBlock">
            <i className="circle" />
            <i className="circleSmall" />
            <i className="circleSmall2" />
            <i className="circleSmall3" />
          </div>
        </div>


        <div className="bottomCard">
          <span>Название</span>
          <span>Адрес,время работы</span>
          <p>Описание</p>
          <span>Средний счёт</span>
          <span>Доставка</span>
          <span>Летняя терасса</span>
          <span>Wi-fi</span>
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