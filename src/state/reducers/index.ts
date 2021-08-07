import { combineReducers } from "redux";
import repositoriesReducers from "./repositoriesReducers";

const reducers = combineReducers({
  repositories: repositoriesReducers,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
