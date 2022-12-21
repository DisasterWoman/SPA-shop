import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  categoryId: 0,
  sort: {
    name: 'orders',
    sortProperty: 'rating',
  },
};

const fileterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setCategoryId(state, action) {
              console.log(action);
              state.categoryId = action.payload;
        }
    }
})

export const { setCategoryId } = fileterSlice.actions;

export default  fileterSlice.reducer;
