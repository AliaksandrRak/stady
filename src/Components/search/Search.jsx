import React from 'react';
import Header from '../header/Header'
import './searchStyle.sass';
import { connect } from 'react-redux';

import FilterMenu from './FilterMenu.jsx'
import SearchEl from './SearchEl';
import data from '../../date/restaurants.js'

class SearchClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openFilter: false,
      cuisine: [],
      bill: "",
      features: [],
      deliver: false,
      timeWork: "",
      cuisinesMass: [],
      timeWorkMass: [],
      billMass: [],
      featuresMass: ["Острые блюда", "Веганское меню", "Парковка", "Wi-fi"],
    }
  }

  componentWillMount() {
    let cuisinesMass = [], timeWorkMass = [], billMass = [];
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data[i].cuisine.length; j++) {
        if (cuisinesMass.indexOf(data[i].cuisine[j]) === -1) {
          cuisinesMass.push(data[i].cuisine[j])
        }
      }
      if (timeWorkMass.indexOf(data[i].timeWork) === -1) {
        timeWorkMass.push(data[i].timeWork)
      }
      if (billMass.indexOf(data[i].bill) === -1) {
        billMass.push(data[i].bill)
      }
    }
    cuisinesMass = cuisinesMass.sort()
    timeWorkMass = timeWorkMass.sort()
    billMass = billMass.sort()
    this.setState({
      cuisinesMass: cuisinesMass,
      timeWorkMass: timeWorkMass,
      billMass: billMass
    })
  }

  handleChangeCuisine = (event) => {
    this.setState({ cuisine: event.target.value })
  }

  handleChangeTimeWork = (event) => {
    this.setState({ timeWork: event.target.value })
  }

  handleChangeBill = (event) => {
    this.setState({ bill: event.target.value })
  }

  handleChangeFeatures = (event) => {
    this.setState({ features: event.target.value })
  }

  handleChangeDeliver = (event) => {
    this.setState({ deliver: event.target.checked })
  }

  clearFilter = () => {
    this.setState({
      cuisine: [],
      bill: "",
      features: [],
      deliver: false,
      timeWork: "",
    })
  }

  filterCards = (array) => {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {

      // проверка на кухню
      let flagСuisine = false;
      if (this.state.cuisine.length === 0) {
        flagСuisine = true
      } else {
        for (let j = 0; j < this.state.cuisine.length; j++) {
          if (array[i].cuisine.indexOf(this.state.cuisine[j]) > -1) {
            flagСuisine = true
            break;
          }
        }
        if (!flagСuisine) {
          continue;
        }
      }

      //проверка на среднюю стоимость
      let flagBill = false;
      if (this.state.bill !== "") {
        if (array[i].bill === this.state.bill) {
          flagBill = true
        }
        if (!flagBill) {
          continue;
        }
      }

      //проверка на время работы
      let flagTimeWork = false;
      if (this.state.timeWork !== "") {
        if (array[i].timeWork === this.state.timeWork) {
          flagTimeWork = true
        }
        if (!flagTimeWork) {
          continue;
        }
      }

      //проверка на Доставку
      let flagDeliver = false;
      if (this.state.deliver) {
        if (array[i].deliver === this.state.deliver) {
          flagDeliver = true
        }
        if (!flagDeliver) {
          continue;
        }
      }

      //проверка на Особенности
      let flagFeatures = false;
      if (this.state.features.length > 0) {

        for (let k = 0; k < this.state.features.length; k++) {
          if (this.state.features[k] === "Острые блюда") {
            if (array[i].chiliPepper) {
              flagFeatures = true
            } else {
              flagFeatures = false
              break
            }
          }
          if (this.state.features[k] === "Веганское меню") {
            if (array[i].leaf) {
              flagFeatures = true
            } else {
              flagFeatures = false
              break
            }
          }
          if (this.state.features[k] === "Парковка") {
            if (array[i].parking) {
              flagFeatures = true
            } else {
              flagFeatures = false
              break
            }
          }
          if (this.state.features[k] === "Wi-fi") {
            if (array[i].wiFi) {
              flagFeatures = true
            } else {
              flagFeatures = false
              break
            }
          }
        }
        if (!flagFeatures) {
          continue;
        }
      }

      newArray.push(array[i])

    }

    console.log(array.length, "длинна массива array")
    console.log(newArray.length, "длинна массива newArray")
    return newArray
  }


  render() {


    let arrayCards = []

    arrayCards = this.filterCards(data)

    return (
      <>
        <div key="searchPage" className="searchBackground">
          <Header />
        </div>
        <div className="searchContainer">
          <div className="filterBlock">
            <FilterMenu cuisinesMass={this.state.cuisinesMass} timeWorkMass={this.state.timeWorkMass} billMass={this.state.billMass} featuresMass={this.state.featuresMass} that={this} />

          </div>
          <div className="mobailFilterBlock">
            <span onClick={() => { this.setState({ openFilter: !this.state.openFilter }) }}>Фильтр</span>
          </div>
          <div className="popupMobailFilter" style={{ display: this.state.openFilter ? "flex" : "none" }}>
            <div className="contentblock">
              <span className="clearPopup" onClick={() => { this.clearFilter() }}></span>
              <span className="closePopup" onClick={() => { this.setState({ openFilter: !this.state.openFilter }) }}></span>
              <FilterMenu cuisinesMass={this.state.cuisinesMass} timeWorkMass={this.state.timeWorkMass} billMass={this.state.billMass} featuresMass={this.state.featuresMass} that={this} />
              <div className="applyBlock">
                <span className="applyPopup" onClick={() => { this.setState({ openFilter: !this.state.openFilter }) }}>Применить</span>
              </div>

            </div>

          </div>
          <div className="renderBlock">
            {arrayCards.map((el, index) =>
              <SearchEl key={index} el={el} />
            )}
            {arrayCards.length === 0 &&
              <div>
                  <h2>По вашим параметрам нет результатов!</h2>
                  <span className="buttonClear" onClick={()=>{this.clearFilter()}}>Попробовать ещё раз!</span>
              </div>
            }
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