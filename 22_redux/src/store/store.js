import { configureStore } from "@reduxjs/toolkit";
// import the counter slice reducer to manage the counter state
import counterSlice from "./counterSlice.js";

export default configureStore({
    reducer: {
        // add counter reducer under the 'counter' key in the store
        counter: counterSlice,
    },
});
