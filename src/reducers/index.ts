import { combineReducers } from "redux";
import { posts } from "./posts";
import { draftPost } from "./draftPost";

const rootReducer = combineReducers({
  posts,
  draftPost
});

export default rootReducer;
