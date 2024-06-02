import { createSlice } from "@reduxjs/toolkit";
import warehouseData from '../data.json'
// console.log(warehouseData);


const initialState = {
    data: warehouseData,
    filteredData: [],
}

const WarehouseSlice = createSlice({
    name: 'warehouse',
    initialState,
    reducers: {
        setWarehouseData: (state, action) => {
            const { id, updatedDetails } = action.payload;
            const index = state.data.findIndex((item) => item.id === id);
            if (index !== -1) {
                state.data[index] = { ...state.data[index], ...updatedDetails };
            }
        },
        setFilterData: (state, action) => {
            state.filteredData = action.payload;
        },
    }
})

export const { setWarehouseData, setFilterData } = WarehouseSlice.actions;
export default WarehouseSlice.reducer
