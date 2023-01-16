import { loadTypes, loginResponseTypes,loadingActionTypes, messageActionType } from "../type";

const initialStates = {
  isLoading: false,
  successMessage: "",
  errorMessage: "",
};

export const CreateHostelReducer = (state = initialStates, {type, payload}) => {
  switch (type) {

    case loadingActionTypes.IS_LOADING:
        return {
          ...state,
          isLoading: true
        }

    case messageActionType.SUCCESS_MESSAGE:
        return {
            ...state,
            successMessage: payload,
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
