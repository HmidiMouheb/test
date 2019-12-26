import { combineReducers } from "redux";
import UserReducer from "../reducers/reducers.sub/UserReducer";
import PostsReducer from "./reducers.sub/PostsReducer";
import CommentsReducer from "./reducers.sub/CommentsReducer";

const AllReducers = combineReducers({
  UserReducer: UserReducer,
  PostsReducer: PostsReducer,
  CommentsReducer: CommentsReducer
});

export default AllReducers;
