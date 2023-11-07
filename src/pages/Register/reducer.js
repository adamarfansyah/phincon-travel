import { produce } from "immer";
import { POST_PROFILE_FAILURE, POST_PROFILE_SUCCESS } from "./constants";

export const initialState = {
  profile: {},
  isLoading: false,
  isError: "",
};

const registerReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case POST_PROFILE_SUCCESS:
        draft.profile = action.profile;
        break;
      case POST_PROFILE_FAILURE:
        draft.profile = action.error;
        break;
    }
  });

export default registerReducer;
