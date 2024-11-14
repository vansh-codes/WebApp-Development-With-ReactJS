import { createSlice } from "@reduxjs/toolkit";

// create a slice of the redux store for the counter, defining the initia state and reducers

export const counterSliceReducer = createSlice({
    name: "counter",
    initialState: {
        value: 0,
    },
    reducers: {
        // define a increment action that adds 1 to the counter value
        increment: (state) => {
            state.value += 1;
        },
        // define a decrement action that subtracts 1 to the counter value
        decrement: (state) => {
            state.value -= 1;
        },
        // define a increment action that adds specified amount to the counter value
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
        reset: (state) => {
            state.value = 0;
        },
    },
});

// export the actions to be used in the component
export const { increment, decrement, incrementByAmount, reset } = counterSliceReducer.actions;

// export the reducer to be used in the store config
export default counterSliceReducer.reducer;