import { produce } from "immer";
import { GET_POST_FAILURE, GET_POST_INIT, GET_POST_SUCCESS } from "./constants";

export const initialState = {
  post: {},
  isLoading: false,
  isError: "",
};

const detailPostReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case GET_POST_INIT:
        draft.isLoading = true;
        break;
      case GET_POST_SUCCESS:
        draft.isLoading = false;
        draft.post = action.post;
        break;
      case GET_POST_FAILURE:
        draft.isLoading = false;
        draft.post = [];
        draft.isError = action.error;
        break;
    }
  });

export default detailPostReducer;
