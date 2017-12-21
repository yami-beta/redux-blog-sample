import { IAction } from "../actions";

export interface IDraftPost {
  title: string;
  body: string;
}

const initialState = {
  title: "",
  body: ""
};

export const draftPost = (
  state: IDraftPost = initialState,
  action: IAction
): IDraftPost => {
  switch (action.type) {
    case "draftPost/edit": {
      return Object.assign({}, state, action.payload);
    }
    default: {
      return state;
    }
  }
};
