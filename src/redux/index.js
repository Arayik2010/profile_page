import { combineReducers } from "redux";
import { newMessageReducer } from "./reducers/messageReducer";
import { dialogsReducer } from "./reducers/dialogsReducer";
import { navbarReducer } from "./reducers/navbarReducer";
import { dialogCategoryReducer } from "./reducers/dialogCategoryReducer";
import { usersReducer } from "./reducers/usersReducer";
import { newsReducer } from "./reducers/newsReducer";
import { setingReducer } from "./reducers/setingsReducer";


export const rootReducer = combineReducers({
  messages: newMessageReducer,
  dialogMessage: dialogsReducer,
  categoryLink: navbarReducer,
  navigationLink: dialogCategoryReducer,
  usersItem: usersReducer,
  newsItem: newsReducer,
  setingItem: setingReducer,
});
