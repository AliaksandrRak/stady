import React from 'react';
import './selectorsStyle.sass'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


export default function Selector(props){
   
    return(
        <FormControl className="selector">
              <InputLabel id="demo-simple-select-label">{props.lableName}</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={props.valueEl}
                onChange={props.handleChange}
              >
                <MenuItem value="">Выберите значение</MenuItem>
                {props.massEl.map((el)=>
                <MenuItem key={el} value={el}>{el}</MenuItem>
                )}
              </Select>
            </FormControl>
    )
}