import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        filter: ''
    },
    reducers: {
        changeFilter(state, action) {
            state.filter = action.payload;
            
        }
    }

});


export const filterReducerr = filterSlice.reducer;
export const { changeFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;