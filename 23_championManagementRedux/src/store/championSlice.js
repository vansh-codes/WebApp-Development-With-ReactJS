import { createSlice } from "@reduxjs/toolkit";

// create a slice of the redux store for the counter, defining the initia state and reducers

export const championSliceReducer = createSlice({
    name: "champion",
    initialState: {
        champions: [
            {
                id: 1,
                name: "Vansh",
                level: 3,
                abilities: ["Ability 1", "Ability 2", "Ability 3"],
            },
            {
                id: 2,
                name: "Yash",
                level: 2,
                abilities: ["Ability 1", "Ability 2", "Ability 3"],
            },
            {
                id: 3,
                name: "Harshit",
                level: 2,
                abilities: ["Ability 1", "Ability 2", "Ability 3"],
            },
        ],
    },
    reducers: {
        // define a increment action that adds 1 to the counter value
        add: (state, action) => {
            const data = action.payload;
            state.champions.push(data);
        },
        // define a decrement action that subtracts 1 to the counter value
        update: (state, action) => {
            const {id, name, level, abilities } = action.payload;
            const champion = state.champions.find((champion) => champion.id === id);
            if(champion){
                champion.name = name;
                champion.level = level;
                champion.abilities = abilities;
            }
        },
        // define a increment action that adds specified amount to the counter value
        remove: (state, action) => {
            const {id } = action.payload;
            state.champions = state.champions.filter((champion) => champion.id !== id);
        }
    },
});

// export the actions to be used in the component
export const { add, update, remove } =
    championSliceReducer.actions;

// export the reducer to be used in the store config
export default championSliceReducer.reducer;
