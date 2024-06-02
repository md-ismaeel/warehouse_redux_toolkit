
import { configureStore } from "@reduxjs/toolkit"
import WarehouseReducer from "../Slice/WarehouseSlice"

export const store = configureStore({
    reducer: {
        WarehouseSlice: WarehouseReducer
    }
})