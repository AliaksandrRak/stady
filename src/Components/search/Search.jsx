import React from 'react';
import Header from '../header/Header'
import './searchStyle.sass';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SearchEl from './SearchEl';

class SearchClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array:["","","","","","","","",]
    }
  }

  render() {

    return (
      <>
        <div key="searchPage" className="searchBackground">
          <Header />
        </div>
        <div className="searchContainer">
          <div className="filterBlock">

          </div>
          <div className="renderBlock">
            {this.state.array.map((el,index)=>
            <SearchEl el={el} />
            )}
          </div>
        </div>

      </>
    );
  }
}


const Search = connect(
  (state) => ({
    mainReduser: state.mainReduser,
  }),
)(SearchClass);
export default Search;