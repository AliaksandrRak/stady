import React from 'react';
import './selectorsStyle.sass'
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';


export default function MultipleSelect(props){
   
    return(
      <FormControl className="multipleSelect">
      <InputLabel id="demo-mutiple-checkbox-label">{props.lableName}</InputLabel>
      <Select
        labelId="demo-mutiple-checkbox-label"
        id="demo-mutiple-checkbox"
        multiple
        value={props.cuisine}
        onChange={props.handleChange}
        input={<Input />}
        renderValue={selected => selected.join(', ')}
      >
        {props.massEl.map(name => (
          <MenuItem key={name} value={name}>
            <Checkbox color="primary" checked={props.cuisine.indexOf(name) > -1} />
            <ListItemText primary={name} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
    )
}