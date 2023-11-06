import { produce } from "immer";
import { CREATE_POST_FAILURE, CREATE_POST_SUCCESS } from "./constants";

export const initialState = {
  post: {},
  isLoading: false,
  isError: "",
};

const newJourneyReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case CREATE_POST_SUCCESS:
        draft.isLoading = false;
        draft.post = action.post;
        break;
      case CREATE_POST_FAILURE:
        draft.isLoading = false;
        draft.isError = action.error;
        break;
    }
  });

export default newJourneyReducer;
