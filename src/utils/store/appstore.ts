import { configureStore } from "@reduxjs/toolkit";
import nameSlice from "./nameSlice";

const appstore = configureStore({
    reducer : {
        names : nameSlice
    }
})

export default appstore;