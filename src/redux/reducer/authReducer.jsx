import { loadTypes, loginResponseTypes,loadingActionTypes, messageActionType } from "../type";

const initialStates = {
  isLoading: false,
  successMessage: "",
  errorMessage: "",
};

export const AuthReducer = (state = initialStates, {type, payload}) => {
  switch (type) {

    case messageActionType.SUCCESS_MESSAGE:
        return {
            ...state,
            successMessage: payload,
            isLoading: false
        }

    case messageActionType.ERROR_MESSAGE:
        return {
            ...state,
            errorMessage: payload,
            isLoading: false
        }
    
    case loadingActionTypes.IS_LOADING_DONE:
        return{
            ...state,
            isLoading: false
        }
    default:
      return state;
  }
};
