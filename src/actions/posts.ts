import { IAction } from "../actions";
import { IPost } from "../reducers/posts";

export const addPost = (post: IPost): IAction => {
  return {
    type: "post/add",
    payload: post
  };
};
