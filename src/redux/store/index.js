import { configureStore, combineReducers} from "@reduxjs/toolkit"
import albumReducer from "../reducers/albumReducer";



const rootReducer = combineReducers({
  album: albumReducer,
});

const store = configureStore({
    reducer: rootReducer
});
export default store;