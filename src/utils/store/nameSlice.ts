import { createSlice } from "@reduxjs/toolkit";

const nameSlice = createSlice({
    name : "names",
    initialState : {
        nameListsNew : [],
    },
    reducers : {
        addNameList : (state:any, action) => {
            state.nameListsNew.push(action.payload);
        },
        deleteNameList : (state:any, action) => {
            state.nameListsNew = state.nameListsNew.filter((name:any) => name.id !== action.payload);
        },
        editNameList : (state:any, action) => {
            state.nameListsNew.map((ele:any) => {
                if (ele.id === action.payload.id) {
                    return ele.name = action.payload.name;
                }
                return ele;
            })
        }
    }
})

export const { addNameList, deleteNameList, editNameList } = nameSlice.actions;
export default nameSlice.reducer;