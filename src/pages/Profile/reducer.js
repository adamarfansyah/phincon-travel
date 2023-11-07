/* eslint-disable no-case-declarations */
import { produce } from "immer";
import { GET_PROFILES_FAILURE, GET_PROFILES_INIT, GET_PROFILES_SUCCESS } from "./constants";

export const initialState = {
  profiles: [],
  isLoading: false,
  isError: "",
};

const profilesReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case GET_PROFILES_INIT:
        draft.isLoading = true;
        break;
      case GET_PROFILES_SUCCESS:
        draft.isLoading = false;
        draft.profiles = action.profiles;
        break;
      case GET_PROFILES_FAILURE:
        draft.isLoading = false;
        draft.profiles = [];
        draft.isError = action.error;
        break;
    }
  });

export default profilesReducer;
