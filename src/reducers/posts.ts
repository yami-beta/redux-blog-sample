import { IAction } from "../actions";

export interface IPost {
  id: number;
  title: string;
  body: string;
}

export interface IPostsState {
  payload: IPost[];
}

const initialState = { payload: [] };

export const posts = (
  state: IPostsState = initialState,
  action: IAction
): IPostsState => {
  switch (action.type) {
    case "post/add": {
      return {
        payload: [
          ...state.payload,
          {
            id:
              state.payload.reduce(
                (maxId, post) => Math.max(post.id, maxId),
                -1
              ) + 1,
            title: action.payload.title,
            body: action.payload.body
          }
        ]
      };
    }
    default: {
      return state;
    }
  }
};
