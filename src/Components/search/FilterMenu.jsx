import React from 'react';
import './searchStyle.sass';

import MultipleSelect from './MultipleSelect'
import Checkbox from '@material-ui/core/Checkbox';
import Selector from './select'

export default function FilterMenu(props) {

  return (
    <div className="filterContent">
      <div className="container">
        <MultipleSelect lableName={"Кухня:"} valueEl={props.that.state.cuisine} massEl={props.cuisinesMass} handleChange={props.that.handleChangeCuisine} />
      </div>
      <div className="container">
        <div className="block">
          <Selector lableName={"Время работы:"} valueEl={props.that.state.timeWork} massEl={props.timeWorkMass}  handleChange={props.that.handleChangeTimeWork} />
        </div>
        <div className="block">
          <Selector lableName={"Средний счёт:"} valueEl={props.that.state.bill} massEl={props.billMass} handleChange={props.that.handleChangeBill} />
        </div>
      </div>
      <div className="container">
        <div className="block">
          <MultipleSelect lableName={"Особенности:"} valueEl={props.that.state.features}  massEl={props.featuresMass} handleChange={props.that.handleChangeFeatures} />
        </div>
        <div className="block">
          Доставка:
      <Checkbox color="primary" onChange={props.that.handleChangeDeliver} checked={props.that.state.deliver} />
        </div>
      </div>
      <div className="containerColumn">
        <span><i className="deliver" /> — Осуществляется доставка</span>
        <span><i className="leaf" /> — Наличие веганского меню</span>
        <span><i className="chiliPepper" /> — Наличие острых блюд</span>
      </div>
    </div>
  )
}