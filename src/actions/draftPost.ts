import { IAction } from "../actions";
import { IDraftPost } from "../reducers/draftPost";

export const edit = (draftPost: IDraftPost): IAction => {
  return {
    type: "draftPost/edit",
    payload: draftPost
  };
};
