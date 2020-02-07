import { combineReducers } from "redux";
import mainPage from "./mainPage";
import submitMaterials from './materialInput';

const rootReducer = combineReducers({
  mainPage,
  submitMaterials
});

export default rootReducer;
