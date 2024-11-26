import { configureStore } from "@reduxjs/toolkit";
// import the counter slice reducer to manage the counter state
import championSlice from "./championSlice.js";

export default configureStore({
    reducer: {
        // add counter reducer under the 'counter' key in the store
        champion: championSlice,
    },
});
