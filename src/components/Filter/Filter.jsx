import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filterSlice';
import {ContainerFilter, Label, FilterInput } from "./Filter.styled"

export const Filter = () => {
    
    const dispatch = useDispatch();
    
    return (<ContainerFilter>
        <Label>
            Find contact by name
        </Label>
        <FilterInput
            type="text"
            name="name"
            
            onChange={(evt) => dispatch(changeFilter(evt.target.value))}
        />
        
    </ContainerFilter>
    )
};
