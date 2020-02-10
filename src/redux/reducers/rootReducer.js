import { combineReducers } from "redux"

import mainPage from "./mainPage"
import material from './material'

const rootReducer = combineReducers({
  mainPage,
  material
});

export default rootReducer
